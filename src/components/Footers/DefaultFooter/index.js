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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import gb from "assets/images/GB no background.png";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid
            container
            item
            xs={12}
            md={3}
            sx={{
              direction: "grid",
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <MKBox
            // sx={{
            //   display: "flex",
            // alignContent: "flex-start",
            // justifyContent: "flex-start",
            //   flexDirection: "column",
            // }}
            >
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={gb}
                  alt={brand.name}
                  maxWidth="7.5rem"
                  ml={-2.75}
                  mt={-3.5}
                  mb={-2}
                />
              </Link>
              <MKTypography variant="h6" color="white">
                {brand.name}
              </MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="error"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid
              key={title}
              container
              item
              xs={6}
              md={2}
              sx={{
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "flex-start",
                mx: "auto",
                p: 1,
              }}
            >
              <MKTypography
                display="block"
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="capitalize"
                m={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        color="success"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
