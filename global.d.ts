import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ThreeElements["ambientLight"];
      meshStandardMaterial: ThreeElements["meshStandardMaterial"];
      // Add other Three.js elements as needed
    }
  }
}
