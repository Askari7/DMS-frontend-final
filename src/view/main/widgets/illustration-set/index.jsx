import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import image1 from "../../../../assets/images/illustrations/ab-testing.svg";
import image2 from "../../../../assets/images/illustrations/about-us.svg";
import image3 from "../../../../assets/images/illustrations/add-products.svg";
import image4 from "../../../../assets/images/illustrations/being-creative.svg";
import image5 from "../../../../assets/images/illustrations/bring-solutions.svg";
import image6 from "../../../../assets/images/illustrations/business-deal.svg";
import image7 from "../../../../assets/images/illustrations/charts-pie-and-bars.svg";
import image8 from "../../../../assets/images/illustrations/clickbait.svg";
import image9 from "../../../../assets/images/illustrations/coding.svg";
import image10 from "../../../../assets/images/illustrations/coming-soon.svg";
import image11 from "../../../../assets/images/illustrations/design-thinking.svg";
import image12 from "../../../../assets/images/illustrations/digital-ads-performance.svg";
import image13 from "../../../../assets/images/illustrations/downloading.svg";
import image14 from "../../../../assets/images/illustrations/fixing-bugs.svg";
import image15 from "../../../../assets/images/illustrations/get-inspired.svg";
import image16 from "../../../../assets/images/illustrations/gifting-online.svg";
import image17 from "../../../../assets/images/illustrations/illustrator-drawing.svg";
import image18 from "../../../../assets/images/illustrations/interface.svg";
import image19 from "../../../../assets/images/illustrations/investing.svg";
import image20 from "../../../../assets/images/illustrations/listening-feedback.svg";
import image21 from "../../../../assets/images/illustrations/loading.svg";
import image22 from "../../../../assets/images/illustrations/marketing-target.svg";
import image23 from "../../../../assets/images/illustrations/modular-coding.svg";
import image24 from "../../../../assets/images/illustrations/newsletter.svg";
import image25 from "../../../../assets/images/illustrations/office-desk.svg";
import image26 from "../../../../assets/images/illustrations/overworked-employee.svg";
import image27 from "../../../../assets/images/illustrations/page-under-construction.svg";
import image28 from "../../../../assets/images/illustrations/payment-with-card.svg";
import image29 from "../../../../assets/images/illustrations/protect-privacy.svg";
import image30 from "../../../../assets/images/illustrations/searching.svg";
import image31 from "../../../../assets/images/illustrations/share.svg";
import image32 from "../../../../assets/images/illustrations/social-media-discussion.svg";
import image33 from "../../../../assets/images/illustrations/success.svg";
import image34 from "../../../../assets/images/illustrations/trophy-awards.svg";
import image35 from "../../../../assets/images/illustrations/video-conference.svg";
import image36 from "../../../../assets/images/illustrations/virtual-reality.svg";
import image37 from "../../../../assets/images/illustrations/we-are-hiring.svg";
import image38 from "../../../../assets/images/illustrations/we-got-a-problem.svg";
import image39 from "../../../../assets/images/illustrations/welcome.svg";
import image40 from "../../../../assets/images/illustrations/work-from-home.svg";

import imageDark1 from "../../../../assets/images/illustrations/ab-testing-dark.svg";
import imageDark2 from "../../../../assets/images/illustrations/about-us-dark.svg";
import imageDark3 from "../../../../assets/images/illustrations/add-products-dark.svg";
import imageDark4 from "../../../../assets/images/illustrations/being-creative-dark.svg";
import imageDark5 from "../../../../assets/images/illustrations/bring-solutions-dark.svg";
import imageDark6 from "../../../../assets/images/illustrations/business-deal-dark.svg";
import imageDark7 from "../../../../assets/images/illustrations/charts-pie-and-bars-dark.svg";
import imageDark8 from "../../../../assets/images/illustrations/clickbait-dark.svg";
import imageDark9 from "../../../../assets/images/illustrations/coding-dark.svg";
import imageDark10 from "../../../../assets/images/illustrations/coming-soon-dark.svg";
import imageDark11 from "../../../../assets/images/illustrations/design-thinking-dark.svg";
import imageDark12 from "../../../../assets/images/illustrations/digital-ads-performance-dark.svg";
import imageDark13 from "../../../../assets/images/illustrations/downloading-dark.svg";
import imageDark14 from "../../../../assets/images/illustrations/fixing-bugs-dark.svg";
import imageDark15 from "../../../../assets/images/illustrations/get-inspired-dark.svg";
import imageDark16 from "../../../../assets/images/illustrations/gifting-online-dark.svg";
import imageDark17 from "../../../../assets/images/illustrations/illustrator-drawing-dark.svg";
import imageDark18 from "../../../../assets/images/illustrations/interface-dark.svg";
import imageDark19 from "../../../../assets/images/illustrations/investing-dark.svg";
import imageDark20 from "../../../../assets/images/illustrations/listening-feedback-dark.svg";
import imageDark21 from "../../../../assets/images/illustrations/loading-dark.svg";
import imageDark22 from "../../../../assets/images/illustrations/marketing-target-dark.svg";
import imageDark23 from "../../../../assets/images/illustrations/modular-coding-dark.svg";
import imageDark24 from "../../../../assets/images/illustrations/newsletter-dark.svg";
import imageDark25 from "../../../../assets/images/illustrations/office-desk-dark.svg";
import imageDark26 from "../../../../assets/images/illustrations/overworked-employee-dark.svg";
import imageDark27 from "../../../../assets/images/illustrations/page-under-construction-dark.svg";
import imageDark28 from "../../../../assets/images/illustrations/payment-with-card-dark.svg";
import imageDark29 from "../../../../assets/images/illustrations/protect-privacy-dark.svg";
import imageDark30 from "../../../../assets/images/illustrations/searching-dark.svg";
import imageDark31 from "../../../../assets/images/illustrations/share-dark.svg";
import imageDark32 from "../../../../assets/images/illustrations/social-media-discussion-dark.svg";
import imageDark33 from "../../../../assets/images/illustrations/success-dark.svg";
import imageDark34 from "../../../../assets/images/illustrations/trophy-awards-dark.svg";
import imageDark35 from "../../../../assets/images/illustrations/video-conference-dark.svg";
import imageDark36 from "../../../../assets/images/illustrations/virtual-reality-dark.svg";
import imageDark37 from "../../../../assets/images/illustrations/we-are-hiring-dark.svg";
import imageDark38 from "../../../../assets/images/illustrations/we-got-a-problem-dark.svg";
import imageDark39 from "../../../../assets/images/illustrations/welcome-dark.svg";
import imageDark40 from "../../../../assets/images/illustrations/work-from-home-dark.svg";

import PageContent from "../../../../layout/components/content/page-content";
import IllustrationItem from "./illustrationItem";

export default function IllustrationSet() {
  const theme = useSelector(state => state.customise.theme)

  const data = [
    {
      image: image1,
      imageDark: imageDark1,
      title: "A/B Testing",
    },
    {
      image: image2,
      imageDark: imageDark2,
      title: "About Us About Our Team",
    },
    {
      image: image3,
      imageDark: imageDark3,
      title: "Add Products",
    },
    {
      image: image4,
      imageDark: imageDark4,
      title: "Being Creative",
    },
    {
      image: image5,
      imageDark: imageDark5,
      title: "Bring Solutions",
    },
    {
      image: image6,
      imageDark: imageDark6,
      title: "Business Deal",
    },
    {
      image: image7,
      imageDark: imageDark7,
      title: "Charts Pie And Bars",
    },
    {
      image: image8,
      imageDark: imageDark8,
      title: "Clickbait",
    },
    {
      image: image9,
      imageDark: imageDark9,
      title: "Coding",
    },
    {
      image: image10,
      imageDark: imageDark10,
      title: "Coming Soon",
    },
    {
      image: image11,
      imageDark: imageDark11,
      title: "Design Thinking",
    },
    {
      image: image12,
      imageDark: imageDark12,
      title: "Digital Ads Performance",
    },
    {
      image: image13,
      imageDark: imageDark13,
      title: "Downloading",
    },
    {
      image: image14,
      imageDark: imageDark14,
      title: "Fixing Bugs",
    },
    {
      image: image15,
      imageDark: imageDark15,
      title: "Get Inspired",
    },
    {
      image: image16,
      imageDark: imageDark16,
      title: "Online Gifting",
    },
    {
      image: image17,
      imageDark: imageDark17,
      title: "Illustrator Drawing",
    },
    {
      image: image18,
      imageDark: imageDark18,
      title: "Interface",
    },
    {
      image: image19,
      imageDark: imageDark19,
      title: "Investing",
    },
    {
      image: image20,
      imageDark: imageDark20,
      title: "Listening Feedback",
    },
    {
      image: image21,
      imageDark: imageDark21,
      title: "Loading",
    },
    {
      image: image22,
      imageDark: imageDark22,
      title: "Marketing Target",
    },
    {
      image: image23,
      imageDark: imageDark23,
      title: "Modular Coding Application",
    },
    {
      image: image24,
      imageDark: imageDark24,
      title: "Newsletter",
    },
    {
      image: image25,
      imageDark: imageDark25,
      title: "Office Desk",
    },
    {
      image: image26,
      imageDark: imageDark26,
      title: "Overworked Employee",
    },
    {
      image: image27,
      imageDark: imageDark27,
      title: "Page Under Construction",
    },
    {
      image: image28,
      imageDark: imageDark28,
      title: "Payment With Card",
    },
    {
      image: image29,
      imageDark: imageDark29,
      title: "Protect Privacy",
    },
    {
      image: image30,
      imageDark: imageDark30,
      title: "Searching",
    },
    {
      image: image31,
      imageDark: imageDark31,
      title: "Share",
    },
    {
      image: image32,
      imageDark: imageDark32,
      title: "Social Media Discussion",
    },
    {
      image: image33,
      imageDark: imageDark33,
      title: "Success",
    },
    {
      image: image34,
      imageDark: imageDark34,
      title: "Trophy Awards",
    },
    {
      image: image35,
      imageDark: imageDark35,
      title: "Video Conference",
    },
    {
      image: image36,
      imageDark: imageDark36,
      title: "Virtual Reality",
    },
    {
      image: image37,
      imageDark: imageDark37,
      title: "We Are Hiring",
    },
    {
      image: image38,
      imageDark: imageDark38,
      title: "We Got A Problem",
    },
    {
      image: image39,
      imageDark: imageDark39,
      title: "Welcome",
    },
    {
      image: image40,
      imageDark: imageDark40,
      title: "Work From Home",
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-48">
      <Col span={24}>
        <PageContent
          title="Illustration Set"
          desc="We used Bangalore Illustration Set and customized it for Yoda"
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "Illustration Set",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {
            data.map((item, index) => (
              <Col xl={6} md={12} span={24} key={index}>
                <IllustrationItem
                  image={theme === "dark" ? item.imageDark : item.image}
                  imageHeight={180}
                  title={item.title}
                />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
}