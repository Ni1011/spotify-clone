import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModel from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModel from "./useSubscribeModel";

const useOnPlay = (songs: Song[]) => {
  const subscribleModel = useSubscribeModel();
  const player = usePlayer();
  const authModel = useAuthModel();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModel.onOpen();
    }

    if (!subscription) {
      return subscribleModel.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
