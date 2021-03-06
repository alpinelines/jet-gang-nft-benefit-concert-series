/* eslint-disable no-param-reassign */
/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Container, Grid, Box } from "@mui/material";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbarDropdown from "components/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "components/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Kit 2 PRO React base styles
import _breakpoints from "assets/theme/base/breakpoints";

// Images
import gb from "assets/images/Gb Blue.png";

// Web3-Context
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../../abi";

// action;
function DefaultNavbar({ brand, routes, transparent, light, sticky, relative, center }) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
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

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < _breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

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

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      light={light}
    />
  ));

  return (
    <Container
      sx={({ breakpoints }) => ({
        position: sticky ? "sticky" : null,
        top: sticky ? 0 : null,
        zIndex: sticky ? 10 : null,
        [breakpoints.down("md")]: {
          height: "5px!imortant",
        },
      })}
    >
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          height: "75px",
          pt: "0.75em",
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MKBox
          display="flex"
          sx={({ breakpoints }) => ({
            alignItems: "center",
            [breakpoints.up("lg")]: {
              justifyContent: "space-between",
            },
          })}
        >
          <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography
              variant="button"
              fontWeight="bold"
              color={light ? "white" : "dark"}
              sx={({ breakpoints }) => ({
                [breakpoints.up("lg")]: {
                  display: "inline",
                },
                [breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              {brand}
            </MKTypography>
            <Grid
              item
              sx={({ breakpoints }) => ({
                [breakpoints.up("lg")]: {
                  display: "none",
                },
                [breakpoints.down("md")]: {
                  display: "inline",
                },
              })}
            >
              <HashLink to="/">
                <Box
                  component="img"
                  src={gb}
                  alt="Giani Blu"
                  sx={{
                    mt: "-1.5em",
                    ml: "-1em",
                    height: "100px",
                  }}
                />
              </HashLink>
            </Grid>
          </MKBox>
          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox
            ml={{ xs: "auto", lg: 0 }}
            sx={({ breakpoints }) => ({
              [breakpoints.down("md")]: {
                mt: "-2em",
                mr: "-0.5em",
              },
            })}
          >
            {!wallet?.provider && (
              <MKButton
                variant="gradient"
                color="warning"
                onClick={() => {
                  onboard.walletSelect();
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
              <Grid container>
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
          </MKBox>
        </MKBox>
        <MKBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Jet Gang NFT Benefit Concert Series",
  transparent: false,
  light: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
