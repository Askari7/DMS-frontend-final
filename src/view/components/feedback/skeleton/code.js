export const basic = `
import { Skeleton } from "antd";

return (
  <div className="hp-bg-color-black-0 hp-p-16">
    <Skeleton />
  </div>
);
`;

export const complex = `
import { Skeleton } from "antd";

return (
  <div className="hp-bg-color-black-0 hp-p-16">
    <Skeleton avatar paragraph={{ rows: 4 }} />
  </div>
);
`;
