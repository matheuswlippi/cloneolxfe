import styled from "styled-components";

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
    
    .box {
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 0px 4px #999;
		margin-bottom: 20px;
	}

	.leftSide {
		flex: 1;
		margin-right: 20px;
		
        .box {
			display: flex;
		}
		
        .adImage {
			width: 320px;
			height: 320px;
			margin-right: 20px;
		}

		.adInfo {
			padding: 10px;
			flex: 1;
			
            .adName {
				margin-bottom: 10px;
			}
			
            .adDescription {
                
			}
		}
	}
	
    .rightSide {
		width: 250px;
		
        .price span {
			color: #0000ff;
			display: block;
			font-size: 27px;
			font-weight: bold;
		}
		
        .contactSellerLink {
			background-color: #0000ff;
			color: #FFF;
			height: 30px;
			border-radius: 5px;
			box-shadow: 0px 0px 4px #999;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			margin-bottom: 20px;
		}
	}
`