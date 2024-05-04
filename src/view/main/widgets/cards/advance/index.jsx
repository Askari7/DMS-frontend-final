import React from "react";

import { Row, Col } from "antd";

import productImg1 from "../../../../../assets/images/product/ecommerce-product-img-1.png";
import productImg2 from "../../../../../assets/images/product/ecommerce-product-img-2.png";

import slideAvatar1 from "../../../../../assets/images/memoji/memoji-6.png";
import slideAvatar2 from "../../../../../assets/images/memoji/memoji-5.png";
import slideAvatar3 from "../../../../../assets/images/memoji/memoji-4.png";
import slideImage1 from "../../../../../assets/images/dasboard/nft-slide-image-1.png";
import slideImage2 from "../../../../../assets/images/dasboard/nft-slide-image-2.png";
import slideImage3 from "../../../../../assets/images/dasboard/nft-slide-image-3.png";
import slideImage4 from "../../../../../assets/images/dasboard/nft-slide-image-4.png";

import bitcoinBg from "../../../../../assets/images/dasboard/bitcoin-bg.svg";
import ethBg from "../../../../../assets/images/dasboard/eth-bg.svg";
import dogecoinBg from "../../../../../assets/images/dasboard/dogecoin-bg.svg";
import shibcoinBg from "../../../../../assets/images/dasboard/shibcoin-bg.svg";
import paypalBg from "../../../../../assets/images/dasboard/paypal-bg.svg";
import netflixBg from "../../../../../assets/images/dasboard/netflix-bg.svg";
import googlePlayBg from "../../../../../assets/images/dasboard/googleplay-bg.svg";
import amazonBg from "../../../../../assets/images/dasboard/amazon-bg.svg";
import bitcoinLogo from "../../../../../assets/images/dasboard/bitcoin-logo.png";
import dogecoinLogo from "../../../../../assets/images/dasboard/dogecoin-logo.svg"
import ethLogo from "../../../../../assets/images/dasboard/eth-circle-logo.svg"
import shibcoinLogo from "../../../../../assets/images/dasboard/shibcoin-logo.svg"
import paypalLogo from "../../../../../assets/images/dasboard/paypal-logo.svg"
import netflixLogo from "../../../../../assets/images/dasboard/netflix-logo.svg"
import googlePlayLogo from "../../../../../assets/images/dasboard/google-play-logo.svg"
import amazonLogo from "../../../../../assets/images/dasboard/amazon-logo.svg"

import PageContent from "../../../../../layout/components/content/page-content";
import CategoriesOfTheWeek from "./categoriesOfTheWeek";
import EcommerceCardOne from "./eCommerceCardOne";
import BrowserStates from "./browserStates";
import BestSellingCategories from "./bestSellingCategories";
import AttendenceCard from "./attendenceCard";
import EcommerceCardTwo from "./eCommerceCardTwo";
import CreditVisaCard from "./creditVisaCard";
import CreditMasterCard from "./creditMasterCard";
import ApplicationCard from "./applicationCard";
import UpgradePlanCardOne from "./upgradePlanCardOne";
import CtaCardOne from "./ctaCardOne";
import CtaCardTwo from "./ctaCardTwo";
import CtaCardThree from "./ctaCardThree";
import CtaCardFour from "./ctaCardFour";
import CtaCardFive from "./ctaCardFive";
import CtaCardSix from "./ctaCardSix";
import SubscribeCard from "./subscribeCard";
import EcommerceCardThree from "./eCommerceCardThree";
import EcommerceCardFour from "./eCommerceCardFour";
import EcommerceCardFive from "./eCommerceCardFive";
import EcommerceCardSix from "./eCommerceCardSix";
import MeetingCard from "./meetingCard";
import NotificationCardOne from "./notificationCardOne";
import NotificationCardTwo from "./notificationCardTwo";
import SocailMediaCard from "./socialMediaCard";
import ProjectTableCard from "./projectTableCard";
import UploadCard from "./uploadCard";
import OrderlistTableCard from "./orderListTableCard";
import SaleFeatureCard from "./saleFeatureCard";
import ProfitFeatureCard from "./profitFeatureCard";
import OrdersFeatureCard from "./ordersFeatureCard";
import CustomerFeatureCard from "./customerFeatureCard";
import ECommerceProductCardItem from "../../../dashboard/ecommerce/eCommerceProductCardItem";
import UpgradePlanCardOneLight from "./upgradePlanCardOneLight";
import UpgradePlanCardOneDark from "./upgradePlanCardOneDark";
import CreditCardNew from "./creditCardNew";
import UpgradeNowCard from "./upgradeNowCard";
import BestTeamCard from "../statistics/bestTeamCard";
import EarningsCard from "./earningsCard";
import ExpensesCard from "./expensesCard";
import BidCardNFT from "../../../dashboard/nft/bidCard";
import OwnNFT from "../../../dashboard/nft/ownNFT";
import NFTProductCard from "../../../dashboard/nft/nftProductCard";
import RecentActivityNFT from "../../../dashboard/nft/recentActivity";
import DownloadCard from "./downloadCard";
import HotBidItem from "../../../dashboard/nft/hotBidItem";
import CreditCard from "./creditCard";
import SmallCardItem from "./smallCardItem";

export default function Advance() {
  // Product Data
  const productCard = [
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg2,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
  ];

  // Hot Bid Data 
  const hotBidData = [
    {
      bg: slideImage1,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
    {
      bg: slideImage2,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
    {
      bg: slideImage3,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
    {
      bg: slideImage4,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
  ]

  // Credit Card Data 
  const creditCardData = [
    {
      type: "primary",
      title: "paypal",
      cardNumber: 1923,
      cardValue: 1.90124523,
      progress: 30,
      name: "Edward Yıldırım",
      expires: "12/23",
    },
    {
      type: "danger",
      title: "netflix",
      cardNumber: 1924,
      cardValue: 1.90124524,
      progress: 40,
      name: "Edward Yıldırım",
      expires: "12/24",
    },
    {
      type: "dark",
      title: "google-play",
      cardNumber: 1925,
      cardValue: 1.90124525,
      progress: 20,
      name: "Edward Yıldırım",
      expires: "12/25",
    },
    {
      type: "warning",
      title: "amazon",
      cardNumber: 1926,
      cardValue: 1.90124526,
      progress: 68,
      name: "Edward Yıldırım",
      expires: "12/26",
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Advance Cards"
          desc="You can find special cards we designed for Yoda Admin Template"
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "YodaCards",
            },
            {
              title: "Advance",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col xl={6} md={12} span={24}>
            <CustomerFeatureCard />
          </Col>

          <Col xl={6} md={12} span={24}>
            <OrdersFeatureCard />
          </Col>

          <Col xl={6} md={12} span={24}>
            <SaleFeatureCard />
          </Col>

          <Col xl={6} md={12} span={24}>
            <ProfitFeatureCard />
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row style={{ marginLeft: -16, marginRight: -16 }} gutter={[0, 32]}>
          {productCard.map((value, index) => (
            <Col md={8} span={24} key={index}>
              <ECommerceProductCardItem value={value} />
            </Col>
          ))}
        </Row>
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <CategoriesOfTheWeek />
        <BestSellingCategories />
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <EcommerceCardOne />
        <AttendenceCard />
      </Col>

      <Col xl={8} sm={12} xs={24}>
        <BrowserStates />
        <EcommerceCardTwo />
      </Col>

      <Col md={12} span={24}>
        <CreditVisaCard />
      </Col>

      <Col md={12} span={24}>
        <CreditMasterCard />
      </Col>

      <Col xl={8} xs={24}>
        <CtaCardOne />
      </Col>

      <Col xl={8} xs={24}>
        <CtaCardTwo />
      </Col>

      <Col xl={8} xs={24}>
        <SubscribeCard />
      </Col>

      <Col lg={8} xs={24}>
        <CtaCardThree />
      </Col>

      <Col lg={8} xs={24}>
        <CtaCardFour />
      </Col>

      <Col lg={8} xs={24}>
        <CtaCardFive />
      </Col>

      <Col xl={18} xs={24}>
        <EcommerceCardThree />
        <EcommerceCardSix />
      </Col>

      <Col xl={6} xs={24}>
        <EcommerceCardFour />
        <EcommerceCardFive />
      </Col>

      <Col xl={8} xs={24}>
        <UploadCard />
      </Col>

      <Col xl={16} xs={24}>
        <OrderlistTableCard />
      </Col>

      <Col xl={8} xs={24}>
        <SocailMediaCard />
      </Col>

      <Col xl={16} xs={24}>
        <ProjectTableCard />
      </Col>

      <Col xl={8} xs={24}>
        <MeetingCard />
      </Col>

      <Col xl={8} xs={24}>
        <NotificationCardOne />
      </Col>

      <Col xl={8} xs={24}>
        <NotificationCardTwo />
      </Col>

      <Col md={12} span={24}>
        <ApplicationCard />
      </Col>

      <Col md={12} span={24}>
        <UpgradePlanCardOne />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col flex="1" className="hp-overflow-hidden">
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <UpgradePlanCardOneLight />
              </Col>

              <Col span={24}>
                <UpgradePlanCardOneDark />
              </Col>

              <Col sm={12} span={24}>
                <CreditCardNew />
              </Col>
             
              <Col sm={12} span={24}>
                <UpgradeNowCard />
              </Col>

              <Col span={24}>
                <BestTeamCard />
              </Col>

              <Col span={24}>
                <EarningsCard />
              </Col>

              <Col span={24}>
                <OwnNFT />
              </Col>

              <Col span={24}>
                <NFTProductCard />
              </Col>

              <Col span={24}>
                <BidCardNFT />
              </Col>
            </Row>
          </Col>

          <Col className="hp-analytics-col-2">
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <ExpensesCard />
              </Col>

              <Col span={24}>
                <RecentActivityNFT />
              </Col>

              <Col span={24}>
                <DownloadCard />
              </Col>

              <Col span={24}>
                <CtaCardSix />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {
            hotBidData.map((item, index) => (
              <Col lg={6} md={12} span={24} key={index}>
                <HotBidItem item={item} />
              </Col>
            ))
          }
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {
            creditCardData.map((item, index) => (
              <Col lg={8} md={12} span={24} key={index}>
                <CreditCard item={item} />
              </Col>
            ))
          }

          <Col lg={8} md={12} span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <SmallCardItem
                  logo={bitcoinLogo}
                  bg={bitcoinBg}
                  number={1923}
                  value={1.90124523}
                  title="Bitcoin"
                />
              </Col>

              <Col span={24}>
                <SmallCardItem
                  logo={dogecoinLogo}
                  bg={dogecoinBg}
                  number={1923}
                  value={1.90124525}
                  title="Dogecoin"
                />
              </Col>
            </Row>
          </Col>

          <Col lg={8} md={12} span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <SmallCardItem
                  logo={ethLogo}
                  bg={ethBg}
                  number={1923}
                  value={1.90124524}
                  title="ETH"
                />
              </Col>

              <Col span={24}>
                <SmallCardItem
                  logo={shibcoinLogo}
                  bg={shibcoinBg}
                  number={1923}
                  value={1.90124526}
                  title="Shibcoin"
                />
              </Col>
            </Row>
          </Col>

          <Col lg={8} md={12} span={24}>
            <SmallCardItem
              logo={paypalLogo}
              bg={paypalBg}
              number={1923}
              value={1.90124527}
              title="Paypal"
            />
          </Col>

          <Col lg={8} md={12} span={24}>
            <SmallCardItem
              logo={netflixLogo}
              bg={netflixBg}
              number={1923}
              value={1.90124528}
              title="Netflix"
            />
          </Col>

          <Col lg={8} md={12} span={24}>
            <SmallCardItem
              logo={googlePlayLogo}
              bg={googlePlayBg}
              number={1923}
              value={1.90124529}
              title="Google Play"
            />
          </Col>

          <Col lg={8} md={12} span={24}>
            <SmallCardItem
              logo={amazonLogo}
              bg={amazonBg}
              number={1923}
              value={1.90124593}
              title="Amazon"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
