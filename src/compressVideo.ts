import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

function compressVideo(inputPath: string, outputPath: string) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .videoCodec("libx264")
      .outputOptions([
        "-crf 30",
        "-preset slow",
        "-movflags +faststart"
      ])
      .noAudio()
      .on("end", () => {
        console.log("✅ Compression finished");
        resolve(true);
      })
      .on("error", (err) => {
        console.error("❌ Error:", err);
        reject(err);
      })
      .save(outputPath);
  });
}

// ✅ wrap in async function
async function run() {
  try {
    await compressVideo(
      "../public/animations/organize.mp4",
      "../public/animations/organize-optimized.mp4"
    );
    console.log("🎉 Done!");
  } catch (err) {
    console.error(err);
  }
}

run();