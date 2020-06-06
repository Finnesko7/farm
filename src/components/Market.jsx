import React from "react";
import Seed from "./Seed";
import ListMarket from "../ListMarket";

const Market = () => (
    <div className="market">
        <div className="market-title">Market</div>
        <div className="market-list">
            {ListMarket.map((item, key) =>
                <Seed
                    key={key}
                    nameSeed={item.name}
                    price={item.price}
                    perCount={item.perCount}
                    description={item.description}
                ></Seed>
            )}
        </div>
    </div>
)

export default Market;