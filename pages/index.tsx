import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-white">
        <Text variant="h2">Buterin Beta v 1.1 </Text>
        <div className="w-full p-6">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
