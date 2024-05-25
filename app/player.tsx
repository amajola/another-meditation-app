import React from "react";
import { StyleSheet, LayoutChangeEvent, TouchableOpacity } from "react-native";
import { APP_PADDING, ThemedView } from "@/components/ThemedView";
import CloseIcon from "@/assets/images/close";
import { CARD_PADDING, FONT_BOLD_COLOR } from "@/constants/styles";
import { ThemedButtonCircle } from "@/components/Button";
import CatergoryMyIcon from "@/assets/images/category-icons/my";
import DownloadIcon from "@/assets/images/download";
import { View } from "react-native";
import Spacer from "@/components/Spacers";
import { ThemedText } from "@/components/ThemedText";
import { AVPlaybackStatus, Audio } from "expo-av";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { formatDuration } from "@/utils/time";
import PlayButton from "@/assets/images/play";
import SeekBackward from "@/assets/images/seekBackward";
import SeekForward from "@/assets/images/seekFoward";
import { useNavigation } from "expo-router";

export default function PlayerScreen() {
  const [contentWidth, setContentWidth] = React.useState<number>(0);
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const [soundOn, setSoundOn] = React.useState<boolean>(false);
  const [audioDuration, setAudioDuration] = React.useState<number>(0);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(0);
  const navigation = useNavigation();

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const actualWidth = width - APP_PADDING - APP_PADDING - 20;
    setContentWidth(actualWidth);
  };

  React.useEffect(() => {
    const setAudioMode = async () => {
      try {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: false });

        const { sound } = await Audio.Sound.createAsync(
          require("../assets/Youtube recording Jan 4.mp3"),
          { shouldPlay: false },
        );

        sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
          if (status.isLoaded && status.isPlaying) {
            setCurrentDuration(status.positionMillis);
            setPosition(status.positionMillis);
          }
          if (status.isLoaded && status.didJustFinish) {
            setPosition(0);
            setCurrentDuration(0);
          }
        });
        sound.getStatusAsync().then((audioStatus: AVPlaybackStatus) => {
          if (audioStatus.isLoaded) {
            setAudioDuration(audioStatus.playableDurationMillis ?? 0);
          }
        });
        setSound(sound);
      } catch (error) {
        console.error("Error setting audio mode or loading sound", error);
      }
    };

    setAudioMode();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const onSliderChange = async (values: number[]) => {
    if (sound) {
      await sound.setPositionAsync(values[0]);
    }
  };

  const onSeek = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(currentDuration + value);
    }
  };

  const onPlay = async () => {
    if (!sound) return;

    if (soundOn) {
      await sound.stopAsync();
    } else {
      await sound.playFromPositionAsync(currentDuration);
    }

    setSoundOn(!soundOn);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header} aria-modal>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon color={FONT_BOLD_COLOR} />
        </TouchableOpacity>

        <View style={styles.headerButtons}>
          <ThemedButtonCircle color={FONT_BOLD_COLOR}>
            <CatergoryMyIcon color="white" size={18} />
          </ThemedButtonCircle>
          <ThemedButtonCircle color={FONT_BOLD_COLOR}>
            <DownloadIcon color="white" size={18} />
          </ThemedButtonCircle>
        </View>
      </View>
      <View style={styles.content}>
        <ThemedText type="title" center>
          Focus Attention
        </ThemedText>
        <ThemedText type="subtitle" center>
          7 DAYS OF CALM
        </ThemedText>
        <Spacer multiply={4} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          onLayout={handleLayout}
        >
          <View style={styles.playerContainer}>
            <TouchableOpacity
              style={styles.seek}
              onPress={() => onSeek(-15000)}
            >
              <SeekBackward color="white" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.play} onPress={onPlay}>
              <PlayButton size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.seek} onPress={() => onSeek(15000)}>
              <SeekForward color="white" size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer multiply={3}/>
        <MultiSlider
          values={[position]}
          min={0}
          step={Math.round(Math.abs(0 - audioDuration) / 100)}
          max={audioDuration}
          snapped={true}
          sliderLength={contentWidth}
          onValuesChange={(values) => setCurrentDuration(values[0])}
          onValuesChangeFinish={onSliderChange}
          containerStyle={{ padding: 20 }}
          unselectedStyle={{
            backgroundColor: "#A0A3B1",
            borderRadius: 10,
            height: 4,
          }}
          selectedStyle={{
            backgroundColor: FONT_BOLD_COLOR,
            borderRadius: 10,
            height: 4,
          }}
          markerStyle={{
            width: 24,
            height: 24,
            backgroundColor: FONT_BOLD_COLOR,
            borderColor: "gray",
            borderWidth: 2,
          }}
        />
        <View style={styles.lenghtIndicator}>
          <ThemedText type="mediumBold">
            {formatDuration(currentDuration)}
          </ThemedText>
          <ThemedText type="mediumBold">
            {formatDuration(audioDuration)}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "space-between",
    backgroundColor: "inherit",
  },
  content: {
    height: "85%",
    display: "flex",
    justifyContent: "flex-end",
  },
  header: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    gap: CARD_PADDING,
  },
  playerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    width: "100%",
  },
  play: {
    width: 100,
    height: 100,
    backgroundColor: FONT_BOLD_COLOR,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BABCC6",
    borderWidth: 10,
  },
  seek: {
    width: 50,
    height: 50,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lenghtIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
