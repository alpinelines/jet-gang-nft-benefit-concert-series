/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import image from "assets/images/JetGang.gif";

// Web3
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../abi";

function CtaOne() {
  const [contract, setContract] = useState({});
  const [web3, setWeb3] = useState({});
  const { address, wallet, onboard, provider } = useWeb3();

  // provider
  useEffect(() => {
    if (provider) {
      const w3 = new Web3(provider.provider);
      setWeb3(w3);
      const ctr = new w3.eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS);
      setContract(ctr);
    }
  }, [provider]);

  const buyTicket = async () => {
    const gasEstimate = await contract.methods.buyTicket().estimateGas({
      value: web3.utils.toWei("40"),
      from: address,
    });
    const receipt = await contract.methods.buyTicket().send({
      value: web3.utils.toWei("40"),
      from: address,
      gas: gasEstimate,
    });
    return receipt;
  };

  const buyVipTicket = async () => {
    const gasEstimate = await contract.methods.buyVIPTicket().estimateGas({
      value: web3.utils.toWei("630"),
      from: address,
    });
    const receipt = await contract.methods.buyVIPTicket().send({
      value: web3.utils.toWei("630"),
      from: address,
      gas: gasEstimate,
    });
    return receipt;
  };

  return (
    <MKBox component="section">
      <MKBox
        bgColor="grey-100"
        px={{ xs: 2, lg: 0 }}
        sx={({ breakpoints }) => ({
          textAlign: "center",
          borderRadius: "16px",
          [breakpoints.down("md")]: {
            mt: "2.5em",
            flexDirection: "column-reverse",
          },
        })}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={6}
            sx={({ breakpoints }) => ({
              textAlign: "center",
              [breakpoints.up("lg")]: {
                mt: "2em",
                ml: "5rem",
              },
              [breakpoints.down("md")]: {
                mt: "12em",
              },
            })}
          >
            <MKTypography variant="h4" mb={1}>
              Jet Gang NFT Benefit
            </MKTypography>
            <MKTypography variant="body2" color="dark" mb={3}>
              <p>
                Cheers to another great year @ ETHDenver. Come celebrate the tremendous growth of
                one of the world&#39;s premier cryptocurrency events. 10% of All revenue will be
                donated to NFTrees, helping to adress the world&#39;s climate crisis. The most
                amazing thing about this community is how much we care about people and the world.
                Let&#39;s get together and show our love!
              </p>
            </MKTypography>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={4} lg={12}>
                <MKButton
                  variant="gradient"
                  color="warning"
                  href="https://www.eventbrite.com/e/zoo-eth-denver-animal-conservation-event-tickets-273674256067"
                >
                  Get Tickets On Event Bright
                </MKButton>
              </Grid>
              <Grid item xs={12} sm={4} lg={12}>
                {!wallet?.provider && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletSelect();
                      onboard.walletCheck();
                    }}
                  >
                    Select Wallet
                  </MKButton>
                )}
                {wallet?.provider && !address && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletCheck();
                    }}
                  >
                    Pay With Crypto
                  </MKButton>
                )}
                {wallet?.provider && address && (
                  <Grid
                    container
                    lg
                    direction="row"
                    sx={({ breakpoints }) => ({
                      [breakpoints.up("md")]: {
                        ml: "2.5em",
                      },
                    })}
                  >
                    <MKButton
                      variant="gradient"
                      color="info"
                      onClick={() => {
                        buyTicket();
                      }}
                      sx={{
                        mx: "2em",
                      }}
                    >
                      Mint GA Tickets
                    </MKButton>
                    <MKButton
                      variant="gradient"
                      color="warning"
                      onClick={() => {
                        buyVipTicket();
                      }}
                    >
                      Mint VIP Tickets
                    </MKButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <MKBox
              component="img"
              src={image}
              alt="image"
              height="22.5em"
              borderRadius="lg"
              shadow="xl"
              display={{ xs: "block" }}
              sx={({ breakpoints }) => ({
                borderRadius: "16px",

                [breakpoints.up("md")]: {
                  ml: "2em",
                  mr: "-4em",
                },
                [breakpoints.down("md")]: {
                  mx: "auto",
                  mt: "0em",
                },
              })}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default CtaOne;
