import { useState } from "react";
import Alert from "../components/ui/display/Alert";
import Card from "../components/ui/display/Card";
import UrlForm from "../components/url/UrlForm";
import UrlTable from "../components/url/UrlTable";

export default function Home() {
  const [hasAlert, setHasAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertClass, setAlertClass] = useState("primary");

  function showAddUrlAlertHandler(alert: { text: string; class: string }) {
    setHasAlert(true);
    setAlertText(alert.text);
    setAlertClass(alert.class);
  }

  return (
    <section>
      {hasAlert && <Alert text={alertText} class={alertClass} />}
      <h1 className="text-center mb-4">heyURL!</h1>
      <Card header="Generate your new URL here">
        <UrlForm onShowAlert={showAddUrlAlertHandler} />
      </Card>
      <Card header="Generated URLs" width="12">
        <UrlTable />
      </Card>
    </section>
  );
}
