import React from "react";
import '../stylesheet/Navigator.css'
function Home() {

    return (
        <React.Fragment>
            <div className={'home'}>
                {/*출처 링크 : https://gongu.copyright.or.kr/gongu/wrt/wrt/view.do?wrtSn=13215201&menuNo=200018*/}
                <img className={'vincent-van-gogh-stary-night main-home-image'} id="wrtImg"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                     alt={'Vincent Willem van Gogh_The Starry Night'}/>
                </div>
        </React.Fragment>
    );
}

export default Home;
