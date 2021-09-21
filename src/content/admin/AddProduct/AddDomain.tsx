// require("dotenv").config();
import React, { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  CardActionArea,
  Tooltip,
  Avatar,
} from "@material-ui/core";

import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";
import Text from "src/components/Text";
import Label from "src/components/Label";

import { useTranslation } from "react-i18next";

import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";

import CardDomain from "../../../components/CardDomain";
import DialogDomain from "../../../components/DialogDomain";

import axios from "axios";

import { gql, useMutation, useQuery } from "@apollo/client";

const CardAddAction = experimentalStyled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

const AvatarAddWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

function AddDomain() {
  const { t } = useTranslation(["addproduct"]);

  const [dataDomain, setDataDomain] = useState();

  const {
    loading: loadDomain,
    error: errDomain,
    data: allDomain,
  } = useQuery(DOMAINS);
  // const {
  //   loading: loadingDomain,
  //   error: errorDomain,
  //   data: dataDomain,
  // } = useQuery(DOMAINS)
  const [item, setItem] = useState({
    file: null,
    name: "",
    price: 0,
    expiry: 0,
    information: "",
    images: "",
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [createDomain, { data, loading, error }] = useMutation(CREATE_DOMAIN, {
    update(proxy, result) {
      let data = result?.data?.createDomain;
      console.log(data);
    },
    variables: {
      images: item?.images,
      dot: item?.name,
      price: item?.price,
      months: item?.expiry,
      information: item?.information,
    },
  });
  if (loading || loadDomain) console.log("loading");
  if (error || errDomain) {
    if (error) console.log(JSON.stringify(error, null, 2));
    else console.log(JSON.stringify(errDomain, null, 2));
  }

  const createNew = () => {
    console.log(item);

    const formData = new FormData();
    formData.append("file", item?.file);
    formData.append("upload_preset", "leminh2k");
    // axios
    //   .post("https://api.cloudinary.com/v1_1/djes0pztf/image/upload", formData)
    //   .then((res) => {
    //     setItem({ ...item, images: res?.data?.secure_url });
    //     createDomain();
    //     console.log(item);
    //   });
    console.log(allDomain);
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{ paddingLeft: "24px", display: "flex", flexWrap: "wrap" }}
    >
      <DialogDomain
        item={item}
        setItem={setItem}
        open={open}
        setOpen={setOpen}
        createNew={createNew}
      />
      <Card
        onClick={handleClickOpen}
        sx={{
          margin: " 8px 16px 8px 0",
          width: "320px",
          minWidth: 290,
          minHeight: 260,
        }}
      >
        <Tooltip arrow title={t("3")}>
          <CardAddAction>
            <CardActionArea sx={{ px: 1 }}>
              <CardContent>
                <AvatarAddWrapper>
                  <AddTwoToneIcon fontSize="large" />
                </AvatarAddWrapper>
              </CardContent>
            </CardActionArea>
          </CardAddAction>
        </Tooltip>
      </Card>
      {allDomain?.domains ? (
        allDomain?.domains.map((item) => {
          return (
            <Card sx={{ margin: " 8px 16px 8px 0" }}>
              <CardDomain
                image={item["images"][0]}
                price={item?.price}
                information={item?.information}
              />
            </Card>
          );
        })
      ) : (
        <div></div>
      )}
      <Card sx={{ margin: " 8px 16px 8px 0" }}>
        <CardDomain
          image="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-link-dc6d553c49.svg"
          price="5000"
          information="sdjngf oiurnisurdnb iuehbius hgkregh "
        />
      </Card>
    </Grid>
  );
}

const CREATE_DOMAIN = gql`
  mutation createDomain(
    $dot: String!
    $information: String!
    $price: Float!
    $months: Int!
    $images: String!
  ) {
    createDomain(
      createDomain: {
        dot: $dot
        information: $information
        price: $price
        months: $months
        images: $images
      }
    ) {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

const DOMAINS = gql`
  query domains {
    domains {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

export default AddDomain;
