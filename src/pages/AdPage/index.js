import React, { useState, useEffect } from "react";
import { PageArea, Fake} from './styled';
import { useParams } from "react-router-dom";
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';



const Page = () => {
    const api = useApi();
    const { id } = useParams(); 

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});


    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && 
                                <Fake height={300} />
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && 
                                    <Fake height={20} />
                                }
                            </div>
                            <div className="adDescription">
                                {loading && 
                                    <Fake height={100} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">

                </div>
            </PageArea>
        </PageContainer>
    )
}

export default Page