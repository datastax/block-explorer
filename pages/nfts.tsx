/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import { ChangeEvent, useState } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';
import { NftResponse, Meta } from '@types';

const ContactCard = styled(Box)(() => ({
  border: `1px dashed #E8F0F8`,
  display: 'flex',
  maxWidth: '250px',
  margin: '20px auto',
  borderRadius: '14px',
}));

const ContactCardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '76px',
  alignContent: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.background.default,
  borderRadius: '14px',
  width: '100%',
  textAlign: 'center',
}));

const InputLabel = styled('label')(({ theme }) => ({
  cursor: 'pointer',
  display: 'inline-block',
  color: theme.palette.background.default,
}));

const Input = styled('input')(() => ({
  cursor: 'pointer',
  width: '100%',
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: 'white',
  background: 'red',
}));

const Card = styled(Box)(() => ({
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  display: 'flex',
  border: '1px solid #E8F0F8',
  borderRadius: '10px',
  flexDirection: 'column',
}));

const ImageWrapper = styled(Box)(() => ({
  maxWidth: '300px',
  width: '100%',
  height: '100%',
  maxHeight: '280px',
  display: 'flex',
  flexDirection: 'column',
  aspectRatio: '1 / 2',
  borderRadius: '10px',
  position: 'relative',
}));

const SelectedBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px',
}));

const Title = styled(Typography)(() => ({
  wordBreak: 'break-all',
  fontSize: '16px',
  fontWeight: 600,
  color: colors.neutral100,
}));
const Wrapper = styled(Box)(() => ({
  minHeight: '71.5vh',
}));

const NftName = styled(Typography)(() => ({
  wordBreak: 'break-all',
  marginBottom: '5px',
  fontSize: '16px',
  fontWeight: 600,
  color: colors.neutral100,
}));

const NFTs = () => {
  const [list, setlist] = useState<NftResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string>('');

  const sanitizeUrl = (url: string) => {
    if (url?.includes('ipfs:/')) {
      return url?.includes('ipfs://ipfs')
        ? `https://ipfs.io/ipfs/${url?.replace('ipfs://ipfs/', '')}`
        : url?.includes('ipfs://')
        ? `https://ipfs.io/ipfs/${url?.replace('ipfs://', '')}`
        : `https://ipfs.io/ipfs/${url?.replace('ipfs:/', '')}`;
    } else if (url?.includes('ar://')) {
      return `https://arweave.net/${url.slice(5)}`;
    }
    return url;
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return;

    const file: File = e.target.files[0];
    const picUrl = URL.createObjectURL(file);
    setSelectedImg(picUrl);
    const formData = new FormData();

    formData.append('file', file);

    setLoading(true);
    const res = await axios.post(
      'http://34.221.190.59:5000/api/image_vector_search',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    console.log('res', res);
    if (res.data) {
      setlist(res.data['Vector Response']);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Title>Seacrh similar NFT by uploading the target image</Title>
      <ContactCard>
        <ContactCardContent>
          <Typography color={'white'} fontSize="15px">
            <InputLabel>
              <Input
                onChange={handleFileUpload}
                hidden
                accept="image/*"
                type={'file'}
                disabled={loading}
              />
              {loading ? 'Uploading...' : 'Upload Image'}
            </InputLabel>
          </Typography>
        </ContactCardContent>
      </ContactCard>
      {selectedImg && (
        <SelectedBox>
          <NftName>Uploaded Image:</NftName>
          <img
            src={selectedImg}
            alt="selected-img"
            style={{ borderRadius: '10px' }}
            width={'200px'}
            height={'200px'}
          />
        </SelectedBox>
      )}
      <Box
        sx={{
          width: '100%',
          display: loading ? 'block' : 'none',
          marginBottom: '30px',
        }}
      >
        <LinearProgress />
      </Box>

      {list?.length > 0 && (
        <>
          <NftName> Related Results:</NftName>
          <Grid container spacing={3}>
            {list.map((nft: NftResponse) => {
              let meta: Meta = JSON.parse(nft.metadata);
              if (typeof meta === 'string') {
                meta = JSON.parse(meta);
              }

              return (
                <Grid item key={nft.token_id} direction={'column'}>
                  <Card>
                    <ImageWrapper>
                      <img
                        src={sanitizeUrl(meta?.image)}
                        alt="nft"
                        style={{ borderRadius: '10px' }}
                        width={'100%'}
                        height={'100%'}
                      />
                    </ImageWrapper>
                    <NftName>
                      <b>Name: </b>
                      {nft.name}
                    </NftName>
                    <NftName>
                      <b>Contract Address: </b>
                      {nft.contract_address}
                    </NftName>
                    <NftName>
                      <b>Token Id: </b>
                      {nft.token_id}
                    </NftName>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Wrapper>
  );
};

export default NFTs;
