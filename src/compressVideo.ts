import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import path from "path";
import { fileURLToPath } from "url";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function compressVideo(inputPath: string, outputPath: string) {
  const resolvedInput = path.resolve(__dirname, inputPath);
  const resolvedOutput = path.resolve(__dirname, outputPath);

  return new Promise((resolve, reject) => {
    ffmpeg(resolvedInput)
      .videoCodec("libx264")
      .outputOptions(["-crf 30", "-preset slow", "-movflags +faststart"])
      .noAudio()
      .on("end", () => {
        console.log("✅ Compression finished");
        resolve(true);
      })
      .on("error", (err) => {
        console.error("❌ Error:", err);
        reject(err);
      })
      .save(resolvedOutput);
  });
}

// ✅ wrap in async function
async function run() {
  try {
    await compressVideo(
      "../public/animations/Scene-3.mp4",
      "../public/animations/sign-optimized.mp4"
    );
    console.log("🎉 Done!");
  } catch (err) {
    console.error(err);
  }
}

run();