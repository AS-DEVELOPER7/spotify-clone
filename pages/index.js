import {
  useBestofartistsQuery,
  useTopAlbumsQuery,
  useTopartistsQuery,
  useTophitsQuery,
  useTopindiaQuery,
} from "../app/services";
import Rows from "../components/Rows";

const Home = () => {
  const tophits = useTophitsQuery();
  const bestartist = useBestofartistsQuery();
  // const topindia = useTopindiaQuery();
  const topartist = useTopartistsQuery();
  const topAlbums = useTopAlbumsQuery();
  // console.log(tophits);

  // console.log(Router.asPath);
  return (
    <div className=" w-[100%] flex flex-col  overflow-x-hidden gap-5">
      <div className="flex flex-col gap-3">
        <p className="title">Top Hits</p>
        <Rows results={tophits?.data?.playlists} data={tophits} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="title">Best of Artists</p>
        <Rows results={bestartist?.data?.playlists} data={bestartist} />
      </div>
      {/* <div className="flex flex-col gap-3">
        <p className="title">India's Top</p>
        <Rows results={topindia?.data?.playlists} data={topindia} />
      </div> */}
      <div className="flex flex-col gap-3">
        <p className="title">Top Albums</p>
        <Rows results={topAlbums?.data?.albums} data={topAlbums} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="title">Top Artists</p>
        <Rows results={topartist?.data?.artists} data={topartist} />
      </div>
    </div>
  );
};

export default Home;
