import Photos from "./Photos";

export default interface IAlbum {
  id: number;
  userId: number;
  title: string;
  photos?: Photos[];
}
