import Card from "../components/ui/display/Card";
import UrlForm from "../components/url/UrlForm";
import UrlTable from "../components/url/UrlTable";

export default function Home() {
  return (
    <section>
      <h1 className="text-center mb-4">heyURL!</h1>
      <Card header="Generate your new URL here">
        <UrlForm />
      </Card>
      <Card header="Generated URLs" width="12">
        <UrlTable />
      </Card>
    </section>
  );
}
