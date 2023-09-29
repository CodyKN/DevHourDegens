import MainLayout from "@/layouts/MainLayout";

Index.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Dev Hour Degens
    </main>
  )
}
