import React from "react";

import { Row, Col } from "antd";

import acala from "../../../../assets/images/crypto/acala.png";
import algorand from "../../../../assets/images/crypto/algorand.png";
import anchor from "../../../../assets/images/crypto/anchor.png";
import astar from "../../../../assets/images/crypto/astar.png";
import bitcoin from "../../../../assets/images/crypto/bitcoin.png";
import bitcoinCash from "../../../../assets/images/crypto/bitcoin-cash.png";
import bitcoinLightning from "../../../../assets/images/crypto/bitcoin-lightning.png";
import cardano from "../../../../assets/images/crypto/cardano.png";
import celo from "../../../../assets/images/crypto/celo.png";
import cosmos from "../../../../assets/images/crypto/cosmos.png";
import dash from "../../../../assets/images/crypto/dash.png";
import dfinity from "../../../../assets/images/crypto/dfinity.png";
import diem from "../../../../assets/images/crypto/diem.png";
import dogecoin from "../../../../assets/images/crypto/dogecoin.png";
import EOS from "../../../../assets/images/crypto/EOS.png";
import ethereum from "../../../../assets/images/crypto/ethereum.png";
import ethereum20 from "../../../../assets/images/crypto/ethereum-2.0.png";
import ethereumClassic from "../../../../assets/images/crypto/ethereum-classic.png";
import filecoin from "../../../../assets/images/crypto/filecoin.png";
import flow from "../../../../assets/images/crypto/flow.png";
import goChain from "../../../../assets/images/crypto/goChain.png";
import graph from "../../../../assets/images/crypto/graph.png";
import harmony from "../../../../assets/images/crypto/harmony.png";
import helium from "../../../../assets/images/crypto/helium.png";
import hyperledger from "../../../../assets/images/crypto/hyperledger.png";
import keep from "../../../../assets/images/crypto/keep.png";
import kusama from "../../../../assets/images/crypto/kusama.png";
import litecoin from "../../../../assets/images/crypto/litecoin.png";
import livepeer from "../../../../assets/images/crypto/livepeer.png";
import mina from "../../../../assets/images/crypto/mina.png";
import mobileCoin from "../../../../assets/images/crypto/mobileCoin.png";
import moonbeam from "../../../../assets/images/crypto/moonbeam.png";
import near from "../../../../assets/images/crypto/near.png";
import nuCypher from "../../../../assets/images/crypto/nuCypher.png";
import OAN from "../../../../assets/images/crypto/OAN.png";
import oasis from "../../../../assets/images/crypto/oasis.png";
import parityEthereum from "../../../../assets/images/crypto/parity-ethereum.png";
import polkadot from "../../../../assets/images/crypto/polkadot.png";
import provenance from "../../../../assets/images/crypto/provenance.png";
import quorum from "../../../../assets/images/crypto/quorum.png";
import XRP from "../../../../assets/images/crypto/XRP.png";
import serum from "../../../../assets/images/crypto/serum.png";
import skale from "../../../../assets/images/crypto/skale.png";
import solana from "../../../../assets/images/crypto/solana.png";
import stacks from "../../../../assets/images/crypto/stacks.png";
import stellar from "../../../../assets/images/crypto/stellar.png";
import terra from "../../../../assets/images/crypto/terra.png";
import tezos from "../../../../assets/images/crypto/tezos.png";
import trustWallet from "../../../../assets/images/crypto/trust-wallet.png";
import zcash from "../../../../assets/images/crypto/zcash.png";

import PageContent from "../../../../layout/components/content/page-content";
import CryptoIconItem from "./cryptoIconItem";

export default function CryptoIcons() {
  const data = [
    {
      image: acala,
      title: "Acala",
    },
    {
      image: algorand,
      title: "Algorand",
    },
    {
      image: anchor,
      title: "Anchor",
    },
    {
      image: astar,
      title: "Astar",
    },
    {
      image: bitcoin,
      title: "Bitcoin",
    },
    {
      image: bitcoinCash,
      title: "Bitcoin Cash",
    },
    {
      image: bitcoinLightning,
      title: "Bitcoin Lightning",
    },
    {
      image: cardano,
      title: "Cardano",
    },
    {
      image: celo,
      title: "Celo",
    },
    {
      image: cosmos,
      title: "Cosmos",
    },
    {
      image: dash,
      title: "Dash",
    },
    {
      image: dfinity,
      title: "Dfinity",
    },
    {
      image: diem,
      title: "Diem",
    },
    {
      image: dogecoin,
      title: "Dogecoin",
    },
    {
      image: EOS,
      title: "Eos",
    },
    {
      image: ethereum,
      title: "Ethereum",
    },
    {
      image: ethereum20,
      title: "Ethereum 2.0",
    },
    {
      image: ethereumClassic,
      title: "Ethereum Classic",
    },
    {
      image: filecoin,
      title: "Filecoin",
    },
    {
      image: flow,
      title: "Flow",
    },
    {
      image: goChain,
      title: "GoChain",
    },
    {
      image: graph,
      title: "The Graph",
    },
    {
      image: harmony,
      title: "Harmony",
    },
    {
      image: helium,
      title: "Helium",
    },
    {
      image: hyperledger,
      title: "Hyperledger",
    },
    {
      image: keep,
      title: "Keep",
    },
    {
      image: kusama,
      title: "Kusama",
    },
    {
      image: litecoin,
      title: "Litecoin",
    },
    {
      image: livepeer,
      title: "Livekeeper",
    },
    {
      image: mina,
      title: "Mina",
    },
    {
      image: mobileCoin,
      title: "Mobilecoin",
    },
    {
      image: moonbeam,
      title: "Moonbeam",
    },
    {
      image: near,
      title: "Near",
    },
    {
      image: nuCypher,
      title: "NuCyper",
    },
    {
      image: OAN,
      title: "OAN",
    },
    {
      image: oasis,
      title: "Oasis",
    },
    {
      image: parityEthereum,
      title: "Parity Ethereum",
    },
    {
      image: polkadot,
      title: "Polkadot",
    },
    {
      image: provenance,
      title: "Provenance",
    },
    {
      image: quorum,
      title: "Quorum",
    },
    {
      image: XRP,
      title: "XRP",
    },
    {
      image: serum,
      title: "Serum",
    },
    {
      image: skale,
      title: "Skale",
    },
    {
      image: solana,
      title: "Solana",
    },
    {
      image: stacks,
      title: "Stacks",
    },
    {
      image: stellar,
      title: "Stellar",
    },
    {
      image: terra,
      title: "Terra",
    },
    {
      image: tezos,
      title: "Tezos",
    },
    {
      image: trustWallet,
      title: "Trust Wallet",
    },
    {
      image: zcash,
      title: "ZCash",
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-48">
      <Col span={24}>
        <PageContent
          title="Crypto Icons"
          desc="You can use over 50 crypto icons."
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "Crypto Icons",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {data.map((item, index) => (
            <Col xl={4} lg={6} md={8} span={12} key={index}>
              <CryptoIconItem
                image={item.image}
                imageHeight={64}
                title={item.title}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}