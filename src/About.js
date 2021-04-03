import './index.css';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
function About() {
    return (
        <div className="w-100% h-30 text-center justify-center pt-4" id="foot">
                <div className="pb-20 text-center justify-items-center" style={{color:'#80470e'}}>
                <img src="profile.png" alt="profile" width="200px"></img>
                    <h1 className="p-4 font-semibold" style={{fontSize:'4vw'}}>ABOUT ME</h1>

                    <TrendingUpIcon fontSize="large"/>
                    <p>Daily journals of beating yesterday, egooe er werger ber bre b owr o bjw ob wo bw o</p>

                </div>
        </div>
    );
}

export default  About;