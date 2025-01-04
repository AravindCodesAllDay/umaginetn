import ScrollUp from "@/components/scroll-up";

export default function Layout(props: {
  popup: React.ReactNode;
  agenda: React.ReactNode;
}) {
  return (
    <>
      {props.popup}
      {props.agenda}
      <ScrollUp />
    </>
  );
}
