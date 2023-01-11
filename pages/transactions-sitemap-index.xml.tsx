import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSidePropsContext } from 'next';
import { SITE_URL } from '@constants';
import { getPassedSecondsToday, getTransactionsList } from 'utils';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const startDate = new Date().toISOString().slice(0, 10);
  const urlsList: string[] = [
    `${SITE_URL}/server-sitemaps/transactions/${startDate}*0.xml`,
  ];

  for (let day = 0; day < 5; day++) {
    const startDate = new Date().toISOString().slice(0, 10);
    const previousDate = new Date(startDate);
    previousDate.setDate(new Date(startDate).getDate() - day);
    const date = previousDate.toISOString().slice(0, 10);
    const transactionsList = await getTransactionsList(date, 1);
    const timeStamp = transactionsList[0]?.block_timestamp;
    const latestBlockNumber = transactionsList[0]?.block_number;
    const currentDayBlocks = getPassedSecondsToday(String(timeStamp));
    for (
      let index = latestBlockNumber;
      index > latestBlockNumber - currentDayBlocks;
      index = index - 150
    ) {
      const url = `${SITE_URL}/server-sitemaps/transactions/${date}*${index}.xml`;
      urlsList.push(url);
    }
  }

  return getServerSideSitemapIndex(context, urlsList);
}

export default function SitemapIndex() {
  return null;
}
