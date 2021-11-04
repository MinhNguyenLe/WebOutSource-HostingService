import * as React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";

import Check from "@material-ui/icons/Check";

import { useTranslation } from "react-i18next";

import { styled } from "@material-ui/core/styles";

const InforTypography = styled(Typography)(({ theme }) => ({
  color: theme.customTheme.hostingCard.txInfor,
}));

const IconCheck = styled(Check)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.iconTick,
  color: theme.customTheme.hostingCard.bg,
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  color: theme.customTheme.hostingCard.promotion,
}));

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.bg,
}));

const SelectBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.bgSelect,
}));

const Line = styled("div")(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.lineBottom,
}));

const HostingItem = ({ select, item }) => {
  const { t } = useTranslation(["hosting"]);

  return (
    <CustomCard sx={{ minWidth: 380 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              paddingBottom: "0px !important",
            }}
          >
            <PriceTypography variant="h1">
              {item.product.price}VNĐ
            </PriceTypography>
            <InforTypography variant="h6">
              /{item.product.months} {t("4")}
            </InforTypography>
          </CardContent>
          <InforTypography
            sx={{ fontWeight: "bold", fontSize: "20px", paddingTop: "16px" }}
            gutterBottom
          >
            {item.type}
          </InforTypography>
          <InforTypography>{item.information}</InforTypography>
        </CardContent>
      </CardActionArea>
      <Line
        style={{
          height: "2px",
          margin: "auto 48px",
        }}
      ></Line>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0",
          }}
        >
          <InforTypography
            sx={{ fontWeight: "500", display: "flex", alignItems: "center" }}
            variant="subtitle2"
          >
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.SSDMemory} {t("1")}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.RAM} {t("2")}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.bandwidth} {t("3")}
          </InforTypography>
        </CardContent>
      </CardContent>
      <CardActions
        sx={{
          margin: "auto 48px ",
          padding: "0 0 32px 0 ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SelectBtn
          onClick={() => select(item)}
          sx={{
            width: "100%",
            borderRadius: "22px",
            fontWeight: "500",
          }}
          size="large"
          variant="contained"
        >
          Select
        </SelectBtn>
      </CardActions>
    </CustomCard>
  );
};

export default HostingItem;
