/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  margin-bottom: 50px;
  .contentWrapper {
    position: relative;
  }
  .carouselTitle {
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
    font-weight: normal;
  }
  .arrow {
    font-size: 30px;
    color: black;
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .carouselLeftNav {
    left: 30px;
  }
  .carouselRighttNav {
    right: 30px;
  }
  .loadingSkeleton {
    display: flex;
    gap: 10px;
    overflow-y: hidden;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;
    @media (min-width: 768px) {
      gap: 20px;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .skeletonItem {
      width: 125px;
      @media (min-width: 768px) {
        width: calc(25% - 15px);
      }
      @media (min-width: 1024px) {
        width: calc(20% - 16px);
      }
      flex-shrink: 0;
      .posterBlock {
        border-radius: 12px;
        width: 100%;
        aspect-ratio: 1 / 1.5;
        margin-bottom: 30px;
      }
      .textBlock {
        display: flex;
        flex-direction: column;
        .title {
          width: 100%;
          height: 20px;
          margin-bottom: 10px;
        }
        .date {
          width: 75%;
          height: 20px;
        }
      }
    }
  }
  .carouselItems {
    display: flex;
    gap: 10px;
    overflow-y: hidden;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;
    scroll-behavior: smooth;
    padding-bottom: 20px;
    @media (min-width: 768px) {
      gap: 20px;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .carouselItem {
      width: 125px;
      cursor: pointer;
      @media (min-width: 768px) {
        width: calc(25% - 15px);
      }
      @media (min-width: 1024px) {
        width: calc(20% - 16px);
        width: calc(10% - 16px);
      }
      flex-shrink: 0;
      .posterBlock {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1.5;
        background-size: cover;
        background-position: center;
        margin-bottom: 30px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 10px;
        .lazy-load-image-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          img {
            z-index: -999;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .circleRating {
          width: 40px;
          height: 40px;
          position: relative;
          top: 30px;
          background-color: white;
          flex-shrink: 0;
          @media (min-width: 768px) {
            width: 50px;
            height: 50px;
          }
        }
        .genres {
          display: none;
          position: relative;
          @media (min-width: 768px) {
            display: flex;
            flex-flow: wrap;
            justify-content: flex-end;
          }
        }
      }
      .textBlock {
        color: white;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          @media (min-width: 768px) {
            font-size: 20px;
          }
        }
        .date {
          font-size: 14px;
          opacity: 0.5;
        }
      }
    }
  }
`;

export default Wrapper;
