import React, {useContext, useEffect} from "react";
import Seed from "./Seed";
import ListMarket from "../ListMarket";
import userContext from "../hooks/UserContext";

const Market = () => {
    const userFarm = useContext(userContext);

    useEffect(() => {
        console.log("change ...")
    }, [userFarm.money]);

    return (
        <div className="market">
            <div className="market-title">Market</div>
            <div className="market-list">
                {ListMarket.map((item, key) =>
                    <Seed
                        key={key}
                        nameSeed={item.name}
                        image={item.image}
                        buy={item.buy}
                        perCount={item.perCount}
                    ></Seed>
                )}
            </div>
        </div>
    )
}

export default Market;