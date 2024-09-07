import { getHomeData } from "@/lib/getHome";
import HomeBanner from "@/widgets/HomeBanner";
import HomeFive from "@/widgets/HomeFive";
import HomeFour from "@/widgets/HomeFour";
import HomeSecond from "@/widgets/HomeSecond";
import HomeThree from "@/widgets/HomeThree";

export default async function Home() {
  const data = await getHomeData()
  const acfData = data?.acf
  
  return (
    <main>
      <div className="bg position-absolute top-0 w-100 start-0 h-full"></div>
      <HomeBanner data={acfData} />
      <HomeSecond data={acfData}  />
      <HomeThree data={acfData}  />
      <HomeFour  data={acfData} />
      <HomeFive data={acfData} />
    </main>
  );
}
