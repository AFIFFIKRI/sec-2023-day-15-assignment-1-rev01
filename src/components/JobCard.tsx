import { useNavigate } from "react-router-dom";

function JobCard(props: any) {
  // console.log(props, "hello");

  // function to detect is year 2023, isNew === true
  const date = new Date(props.job.post_date);
  const isNew = date.getFullYear() === 2023;
  // console.log(isNew);

  // navigation function
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        // console.log(props.job.id);
        navigate(`/job/${props.job.id}`);
      }}
      className="border p-4 rounded-md w-[430px] space-y-4 cursor-pointer"
    >
      <div>
        <h4 className="text-xl font-medium inline-block">{props.job.job}</h4>
        {/* condition rendering here, render if isNew === true */}
        {/* boolean if statement */}
        {isNew ? (
          <span className=" bg-green-300 inline-block text-gray-800 p-1 ml-2">
            New
          </span>
        ) : null}

        <p>{props.job.company}</p>
      </div>

      <div>
        <p>📅 Posted on {props.job.post_date}</p>
        <p>
          📍 &nbsp; {props.job.district}, {props.job.company_state}
        </p>
        <p className="capitalize">💼 {props.job.work_type}</p>
      </div>

      <div className=" space-x-1">
        <p className=" bg-gray-200 py-1 px-2 rounded inline-block">
          {props.job.company_state}
        </p>
        {props.job.stacks.map((stack: string, index: number) => {
          return (
            <p key={index} className=" bg-gray-200 p-1 rounded inline-block">
              {stack}
            </p>
          );
        })}
      </div>
      <p>Added on {props.job.post_date}</p>
    </div>
  );
}

export default JobCard;
