import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth, useVideosData } from '../../contexts';
import { Loader, VideoDetailsCard } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const SinglePlaylist = () => {
  const { setDocumentTitle } = useDocumentTitle('Playlists');
  const [playlistDetails, setPlaylistDetails] = useState({});
  const {
    videosDataState: { playlists },
  } = useVideosData();
  const { userData } = useAuth();
  const { playlistID } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { playlist },
          status,
        } = await axios.get(`/api/user/playlists/${playlistID}`, {
          headers: { authorization: userData.encodedToken },
        });
        if (status === 200) {
          setPlaylistDetails(playlist);
          setDocumentTitle(playlist.title);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [playlistID, userData, playlists, setDocumentTitle]);

  return (
    <div className='content'>
      {!playlistDetails?.videos && <Loader />}
      {playlistDetails?.videos && (
        <>
          <h1 className='text-center text-xl m-sm-b'>
            <span>{playlistDetails.title} </span>
            <span>({playlistDetails.videos.length})</span>
          </h1>
          <div className='grid-container auto m-sm-b'>
            {playlistDetails.videos.map((videoDetails) => (
              <VideoDetailsCard
                key={videoDetails._id}
                videoDetails={videoDetails}
                playlistDetails={playlistDetails}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
