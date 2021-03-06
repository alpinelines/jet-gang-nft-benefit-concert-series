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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/gold-stardoor.jpg";
import gold from "assets/images/gold-stage.jpg";

// Content
import CtaOne from "components/CtaOne";
import LogoAreaThree from "components/LogoAreaThree";
import FeaturesOne from "components/FeaturesOne";
import TeamTwo from "components/TeamTwo";

// Web3
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../abi";

function Presentation() {
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
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        width="100%"
        sx={({ breakpoints }) => ({
          display: "grid",
          placeItems: "center",
          [breakpoints.up("lg")]: {
            minHeight: "100vh",
            backgroundImage: `linear-gradient(rgba(1, 0, 42, 0.55), rgba(1, 0, 42, 0.4)), url(${gold})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          },
          [breakpoints.down("md")]: {
            minHeight: "65vh",
            backgroundImage: `linear-gradient(rgba(1, 0, 42, 0.55), rgba(1, 0, 42, 0.4)), url(${gold})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          },
        })}
      >
        <Container>
          <Grid container item xs={12} lg={9} pt={20} mx="auto">
            <CtaOne />
            {/* <Grid
              container
              item
              sx={({ breakpoints }) => ({
                alignContent: "center",
                justifyContent: "center",
                [breakpoints.up("lg")]: {
                  flexDirection: "column",
                },
                [breakpoints.down("md")]: {
                  mt: "-4.5em",
                },
              })}
            >
              <Grid item>
              </Grid>
            </Grid> */}
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <MKBox
          id="lineup"
          sx={{
            mt: "5em",
          }}
        >
          <TeamTwo />
        </MKBox>
        <MKBox
          sx={({ breakpoints }) => ({
            [breakpoints.up("lg")]: {
              mt: "5em",
              pt: "5em",
              pb: "0em",
            },
            [breakpoints.down("md")]: {
              mt: "3em",
              mb: "4em",
            },
          })}
        >
          <Grid
            item
            sx={({ breakpoints }) => ({
              [breakpoints.up("lg")]: {
                mt: "-0.75em",
              },
            })}
          >
            <MKTypography
              variant="subtitle1"
              color="white"
              sx={({ breakpoints }) => ({
                textAlign: "center",
                [breakpoints.up("lg")]: {
                  fontSize: "14pt",
                },
                [breakpoints.down("md")]: {
                  fontSize: "12pt",
                },
              })}
              px={6}
              mt={1}
            >
              &#186; Zodiac House | Sunday February 20th, 2022 | Denver, CO &#186;
            </MKTypography>
          </Grid>
          <Grid item>
            <MKTypography
              variant="h1"
              color="white"
              my={1}
              sx={({ breakpoints }) => ({
                textAlign: "center",
                [breakpoints.up("lg")]: {
                  fontSize: "45pt",
                },
                [breakpoints.down("md")]: {
                  fontSize: "28pt",
                },
              })}
            >
              Celebrate ETHDenver. Make a Difference.
            </MKTypography>
          </Grid>
          <Grid
            item
            sx={({ breakpoints }) => ({
              [breakpoints.up("lg")]: {
                mt: "-1em",
                mr: "-10em",
              },
              [breakpoints.down("md")]: {},
            })}
          >
            <MKBox
              id="sponsor"
              sx={({ breakpoints }) => ({
                mt: "1em",
                [breakpoints.up("lg")]: {
                  position: "relative",
                  display: "inline",
                },
                [breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <LogoAreaThree />
            </MKBox>
          </Grid>
          <Grid
            item
            sx={({ breakpoints }) => ({
              textAlign: "center",
              mx: "auto",
              [breakpoints.up("lg")]: {
                justifyContent: "center",
                alignContent: "center",
                mt: "-2em",
              },
              [breakpoints.down("md")]: {
                my: "1em",
              },
            })}
          >
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
                Connect To RSVP
              </MKButton>
            )}
            {wallet?.provider && address && (
              <Grid container mx="auto">
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
            <Grid
              item
              sx={({ breakpoints }) => ({
                mx: "auto",
                [breakpoints.up("md")]: {
                  display: "none",
                },
                [breakpoints.down("md")]: {
                  mt: "-5em",
                  mb: "-10em",
                  display: "inline",
                },
              })}
            >
              <MKBox id="sponsor">
                <MKTypography
                  id="sponsors"
                  variant="h2"
                  color="light"
                  textAlign="center"
                  mt={12.5}
                  mb={1.5}
                >
                  Sponsors
                </MKTypography>
              </MKBox>
              <MKBox>
                <LogoAreaThree />
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
        <MKBox
          id="charity"
          sx={({ breakpoints }) => ({
            [breakpoints.up("lg")]: {
              mt: "2em",
            },
            [breakpoints.down("md")]: {
              mb: "5em",
            },
          })}
        >
          <FeaturesOne />
        </MKBox>
      </Container>
      <MKBox
        sx={({ breakpoints }) => ({
          [breakpoints.up("lg")]: {
            mt: "3em",
          },
          [breakpoints.down("md")]: {
            mt: "-5em",
          },
        })}
      >
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
