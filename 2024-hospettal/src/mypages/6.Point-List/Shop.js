import styled from "styled-components";
import Button from "../../component/Button";
import styles from "../MyPage.module.css";
import style from "./Shop.module.css";
import { useEffect, useState } from "react";
import Overlay from "../Overlay"
import ShopingModal from "./ShopingModal";

function Shop() {
  const shoping = [
    {
      label: "고구마 져키 50g (6개입)",
      alt: "pointshop_01",
      price: "15,000냥",
      url: require("../../assets/gallery/pointshop_01.png"),
    },
    {
      label: "산양유 스틱 50g (6개입)",
      alt: "pointshop_02",
      price: "12,000냥",
      url: require("../../assets/gallery/pointshop_02.png"),
    },
    {
      label: "냥냥 참치캔 85g (3캔)",
      alt: "pointshop_04",
      price: "15,000냥",
      url: require("../../assets/gallery/pointshop_04.png"),
    },
    {
      label: "고구마 져키 50g (6개입)",
      alt: "pointshop_03",
      price: "15,000냥",
      url: require("../../assets/gallery/pointshop_03.png"),
    },
    {
      label: "배밴 패드",
      alt: "pointshop_05",
      price: "25,000냥",
      url: require("../../assets/gallery/pointshop_05.png"),
    },
    {
      label: "고양이 모래",
      alt: "pointshop_07",
      price: "25,000냥",
      url: require("../../assets/gallery/pointshop_07.png"),
    },
    {
      label: "고구마 져키 50g (6개입)",
      alt: "pointshop_06",
      price: "15,000냥",
      url: require("../../assets/gallery/pointshop_06.png"),
    },
    {
      label: "고구마 져키 50g (6개입)",
      alt: "pointshop_08",
      price: "15,000냥",
      url: require("../../assets/gallery/pointshop_08.png"),
    },
  ];

  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <div className={style.ShopContainer}>
      {shoping.map((shop, index) => (
        <div className={style.Shopbox} key={index}>
          <figure className={style.shopImg}>
            <img
              src={shop.url}
              alt={shop.alt}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <p className={style.shopItem}>{shop.label}</p>
          <h4 className={style.shopPrice}>{shop.price}</h4>

          <div className={styles.retouch}>
            <Button
              type="submit"
              className="correction"
              style={{ margin: "0", height: "2.5rem" }}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              교환하기
            </Button>
          </div>

          {modalOpen && <Overlay modalOpen={modalOpen} />}
          {modalOpen && <ShopingModal setModalOpen={setModalOpen} />}
        </div>
      ))}
    </div>
  );
}

export default Shop;
