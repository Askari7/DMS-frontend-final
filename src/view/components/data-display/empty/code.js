export const basic = `
import { Empty } from "antd";

return (
  <Empty />
);
`;

export const chooseImage = `
import { Empty } from "antd";

return (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
);
`;

export const noDescription = `
import { Empty } from "antd";

return (
  <Empty description={false} />
}
`;

export const customize = `
import { Empty, Button } from "antd";

import girlandcat from "../../../../assets/images/illustrations/girlandcat.svg";

return (
  <Empty 
    className="hp-my-8"
    image={girlandcat}
    imageStyle={{
      height: 240,
    }}
    description={
      <span className="hp-text-color-dark-30">Select workout plan</span>
    }
  >
    <Button type="primary">Start Now</Button>
  </Empty>
);
`;

export const groups = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-groups.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-groups-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 130,
    }}
    description={false}
  />
);
`;

export const forms = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-forms.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-forms-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 150,
    }}
    description={false}
  />
);
`;

export const sheets = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-sheets.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-sheets-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 170,
    }}
    description={false}
  />
);
`;

export const questions = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-questions.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-questions-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 130,
    }}
    description={false}
  />
);
`;

export const search = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-search.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-search-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 155,
    }}
    description={false}
  />
);
`;

export const search2 = `
import { useSelector } from "react-redux";

import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-search-2.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-search-2-dark.svg";

const theme = useSelector(state => state.customise.theme)

return (
  <Empty
    className="hp-my-8"
    image={theme === "dark" ? emptyImageDark : emptyImage}
    imageStyle={{
      height: 155,
    }}
    description={false}
  />
);
`;