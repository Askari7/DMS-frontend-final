import React from "react";

import { Row, Col } from "antd";

import bitcoin from "../../../../assets/images/crypto/bitcoin.png";
import algorand from "../../../../assets/images/crypto/algorand.png";
import polkadot from "../../../../assets/images/crypto/polkadot.png";
import litecoin from "../../../../assets/images/crypto/litecoin.png";
import ethereum from "../../../../assets/images/crypto/ethereum.png";
import keep from "../../../../assets/images/crypto/keep.png";
import serum from "../../../../assets/images/crypto/serum.png";
import moonbeam from "../../../../assets/images/crypto/moonbeam.png";
import solana from "../../../../assets/images/crypto/solana.png";
import skale from "../../../../assets/images/crypto/skale.png";
import mobileCoin from "../../../../assets/images/crypto/mobileCoin.png";
import kusama from "../../../../assets/images/crypto/kusama.png";
import gochain from "../../../../assets/images/crypto/goChain.png";
import astar from "../../../../assets/images/crypto/astar.png";
import dfinity from "../../../../assets/images/crypto/dfinity.png";
import near from "../../../../assets/images/crypto/near.png";
import zcash from "../../../../assets/images/crypto/zcash.png";
import mina from "../../../../assets/images/crypto/mina.png";
import helium from "../../../../assets/images/crypto/helium.png";
import fileCoin from "../../../../assets/images/crypto/filecoin.png";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxBoxedLogoItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Logo</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-1-1"
                name="select-box-item"
                type="boxed"
                image={bitcoin}
                imageHeight={64}
                title="Bitcoin"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-1-2"
                name="select-box-item"
                type="boxed"
                image={algorand}
                imageHeight={64}
                title="Algorand"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-1-3"
                name="select-box-item"
                type="boxed"
                image={polkadot}
                imageHeight={64}
                title="Polkadot"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-1-4"
                name="select-box-item"
                type="boxed"
                image={litecoin}
                imageHeight={64}
                title="Litecoin"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-2-1"
                name="select-box-item"
                type="boxed"
                image={ethereum}
                imageHeight={64}
                title="Ethereum"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-2-2"
                name="select-box-item"
                type="boxed"
                image={keep}
                imageHeight={64}
                title="Keep"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-2-3"
                name="select-box-item"
                type="boxed"
                image={serum}
                imageHeight={64}
                title="Serum"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-2-4"
                name="select-box-item"
                type="boxed"
                image={moonbeam}
                imageHeight={64}
                title="Moonbeam"
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-3-1"
                name="select-box-item"
                type="boxed"
                image={solana}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-3-2"
                name="select-box-item"
                type="boxed"
                image={skale}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-3-3"
                name="select-box-item"
                type="boxed"
                image={mobileCoin}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-3-4"
                name="select-box-item"
                type="boxed"
                image={kusama}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-4-1"
                name="select-box-item"
                type="boxed"
                image={solana}
                imageHeight={64}
                title="Solana"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-4-2"
                name="select-box-item"
                type="boxed"
                image={skale}
                imageHeight={64}
                title="Skale"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-4-3"
                name="select-box-item"
                type="boxed"
                image={mobileCoin}
                imageHeight={64}
                title="MobileCoin"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-4-4"
                name="select-box-item"
                type="boxed"
                image={kusama}
                imageHeight={64}
                title="Kusama"
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-5-1"
                name="select-box-item"
                type="boxed"
                image={solana}
                imageHeight={64}
                title="Solana"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-5-2"
                name="select-box-item"
                type="boxed"
                image={skale}
                imageHeight={64}
                title="Skale"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-5-3"
                name="select-box-item"
                type="boxed"
                image={mobileCoin}
                imageHeight={64}
                title="MobileCoin"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-5-4"
                name="select-box-item"
                type="boxed"
                image={kusama}
                imageHeight={64}
                title="Kusama"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-6-1"
                name="select-box-item"
                type="boxed"
                image={solana}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-6-2"
                name="select-box-item"
                type="boxed"
                image={skale}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-6-3"
                name="select-box-item"
                type="boxed"
                image={mobileCoin}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-6-4"
                name="select-box-item"
                type="boxed"
                image={kusama}
                imageHeight={64}
                subTitle={<span className="hp-text-color-black-60">Credit Card</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-7-1"
                name="select-box-item"
                type="boxed"
                image={gochain}
                imageHeight={64}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-7-2"
                name="select-box-item"
                type="boxed"
                image={astar}
                imageHeight={64}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-7-3"
                name="select-box-item"
                type="boxed"
                image={dfinity}
                imageHeight={64}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-7-4"
                name="select-box-item"
                type="boxed"
                image={near}
                imageHeight={64}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-8-1"
                name="select-box-item"
                type="boxed"
                image={zcash}
                imageHeight={64}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-8-2"
                name="select-box-item"
                type="boxed"
                image={mina}
                imageHeight={64}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-8-3"
                name="select-box-item"
                type="boxed"
                image={helium}
                imageHeight={64}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-logo-item-8-4"
                name="select-box-item"
                type="boxed"
                image={fileCoin}
                imageHeight={64}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
