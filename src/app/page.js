import HomeBanner from "@/widgets/HomeBanner";
import HomeFive from "@/widgets/HomeFive";
import HomeFour from "@/widgets/HomeFour";
import HomeSecond from "@/widgets/HomeSecond";
import HomeThree from "@/widgets/HomeThree";

export default function Home() {
  return (
    <main>
      <div className="bg position-absolute top-0 w-100 start-0 h-full"></div>
      <HomeBanner />
      <HomeSecond />
      <HomeThree />
      <HomeFour />
      <HomeFive/>
    </main>
  );
}
