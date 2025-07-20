const DateTime = ({ datetime }: { datetime: string }) => {
  const myDatetime = new Date(datetime);
  const modifiedDate = myDatetime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });

  const modifiedTime = myDatetime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC"
  });

  return (
    <div className="relative">
      <span className="sr-only">Posted on: </span>
      {modifiedDate} <span aria-hidden="true">|</span>
      <span className="sr-only">&nbsp;at&nbsp;</span> {modifiedTime}
    </div>
  );
};

export default DateTime;
