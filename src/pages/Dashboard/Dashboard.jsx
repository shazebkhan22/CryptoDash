import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "../Dashboard/components/PriceSection"
import {Grid ,GridItem } from "@chakra-ui/react"
import Transactions from "../Dashboard/components/Transactions"
import InfoCard from "./components/InfoCard"

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard"> 
    <Grid
    gridTemplateColumns={{
      base: "repeat(1, 1fr)",
      xl:"repeat(2, 1fr)",

    }}
    gap="6"
    >
      <GridItem
      colSpan={{
        base: 1,
        xl:2,
      }}>
    <PortfolioSection /> 
    </GridItem>
    <GridItem colSpan={1}>
    <PriceSection />
    </GridItem>
    <GridItem>
      <Transactions colSpan={1}/>
    </GridItem>
    <GridItem colSpan={1}>
      <InfoCard imgUrl="/public/dot_bg.svg"
      text="Learn more about loans - Keep your Bitcoin ,  access it's value without selling it"
      tagText="Loan"
      inverted={false}/>
    </GridItem>
    <GridItem colSpan={1}>
      <InfoCard imgUrl="/public/grid_bg.svg"
       text="Learn more about our real estate, mortgage, and  corporate account services"
       tagText="Contact"
       inverted={true}/>
    </GridItem>
    </Grid> 
    </DashboardLayout>
  )
}

export default Dashboard
