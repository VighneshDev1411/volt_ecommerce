import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Define the cache interface correctly
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Use TypeScript's `declare global` to store cache globally
declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = { bufferCommands: false };
    
    // Ensure the returned connection matches `mongoose.Connection`
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m.connection);
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached; // Store globally

  return cached.conn;
}

export default dbConnect;
