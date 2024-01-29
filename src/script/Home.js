import React from "react";
import '../stylesheet/Home.css'
function Home() {

    return (
        <React.Fragment>
            <div className={'home'}>
                {/*출처 링크 : https://gongu.copyright.or.kr/gongu/wrt/wrt/view.do?wrtSn=13215201&menuNo=200018*/}
                <img className={'main-home-image'} id="skyline-to-korea"
                    src="/img/Skyline-to-Korea-2023.jpeg"
                    alt={'Skyline-to-Korea'} />
                <h1 className={'name'} align="right">Yoonje <br/> Lee</h1>

            </div>
        </React.Fragment>
    );
}

export default Home;
