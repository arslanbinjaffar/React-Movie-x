import styled from "styled-components";



const Wrapper=styled.div`
    height: 34px;
    background-color: white;
    border-radius: 20px;
    padding: 2px;
    .tab-items {
        display: flex;
        align-items: center;
        height: 30px;
        position: relative;
        .tab-item {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            color: var(--black);
            font-size: 14px;
            position: relative;
            z-index: 1;
            cursor: pointer;
            transition: color ease 0.3s;
            &.active {
                color: white;
            }
        }
        .moving-bg {
            height: 30px;
            width: 100px;
            border-radius: 15px;
            background-image: var(--gradient);
            position: absolute;
            left: 0;
            transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
        }
    }

`

export default Wrapper;