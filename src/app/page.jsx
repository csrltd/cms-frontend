'use client'
import Button from "@/components/common/Button";
import { Smile } from "lucide-react";

export default function Home() {

  const showAlert = () => {
    alert('Button clicked!');
  };

  const goToAnotherPage = (link) => {
    window.location.href = link;
  }
  return (
    <>
      <h1>Weeeeee please click below</h1>
      <Button buttonText={'Contact us'} icon={<Smile />} onClick={() => goToAnotherPage('/contact-us')} />
      <Button buttonText={'Show alert'} onClick={showAlert} />
    </>
  );
}
