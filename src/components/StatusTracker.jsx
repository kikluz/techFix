import { useState } from "react";
import {
  FaSearch,
  FaClipboardCheck,
  FaTools,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

const StatusTracker = () => {
  const [repairId, setRepairId] = useState(""); //? Input for repair ID
  const [status, setStatus] = useState(null); //? null, 'in-progress', 'completed'
  const [isLoading, setIsLoading] = useState(false); //? Loading state for API call

  // ? Sample status steps data
  const statusSteps = [
    {
      id: 1,
      name: "Received",
      icon: <FaClipboardCheck />,
      description: "We have received your device and are diagnosing the issue.",
    },
    {
      id: 2,
      name: "Diagnosis",
      icon: <FaSearch />,
      description: "Diagnosing the issue.",
    },
    {
      id: 3,
      name: "Repair",
      icon: <FaTools />,
      description: "Repair work is in progress.",
    },
    {
      id: 4,
      name: "Testing",
      icon: <FaCheckCircle />,
      description: "Quality testing.",
    },
    {
      id: 5,
      name: "ready ",
      icon: <FaTruck />,
      description: "ready for pickup/delivery.",
    },
  ];

  const checkStatus = async (e) => {
    e.preventDefault();
    // ? Validate input, what is trim()? trim() removes whitespace from both ends of a string
    if (!repairId.trim()) return;
    // ? Simulate API call
    setIsLoading(true);
    // ? Simulated delay for API call,  2 seconds
    await new Promise((result) => setTimeout(result, 2000));
    // ? Mock status based on the repairId for demo purposes
    const randomStep =
      // ? get  random step from statusSteps array
      statusSteps[Math.floor(Math.random() * statusSteps.length)];
    const mockStatus = {
      repairId: repairId,
      currentStep: randomStep.id,
      estimatedCompletion: "2024-12-01",
      technician: "deku Midoriya",
      notes: "Your device is being repaired with high priority.",
    };
    setStatus(mockStatus);
    setIsLoading(false);
  };
  return (
    <div className="space-y-8">
      {/* search Form */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title"> Check Repair Status</h2>
          <p className="text-gray-600">
            Enter your repair ID to check the status
          </p>
          <form onSubmit={checkStatus} className="flex gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter Repair ID Number"
              className="input input-bordered flex-grow"
              value={repairId}
              // ? onChange event to update the repairId state
              onChange={(e) => setRepairId(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              // ? Disable button while loading or if input is empty
              disabled={isLoading || !repairId.trim()}
            >
              {/* ? If isLoading is true, display the spinner. Otherwise, display the words Check Status. */}
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Check Status"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ? Status Display */}
      {status && (
        <div className="space-y-6">
          {/* ? Status overviews */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Repair # {status.repairId}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Technician: </strong>
                  {status.technician}
                </div>
                <div>
                  <strong>Est. Completion: </strong>
                  {status.estimatedCompletion}
                </div>
                <div>
                  <strong>Current Status: </strong>
                  {statusSteps[status.currentStep - 1].name}
                </div>
              </div>
              {status.notes && (
                <div className="mt-4 p-4 bg-warning bg-opacity-10 rounded-lg">
                  <strong>Technician Notes: </strong>
                  {status.notes}
                </div>
              )}
            </div>
          </div>
          {/* Progress Steps */}
          <div className="card-bg-base-100 shadow-lg ">
            <div className="body-card">
              <h3 className="card-title mb-6">Repair Progress</h3>
              <ul className="steps steps-vertical lg:steps-horizontal w-fullpb-2">
                {statusSteps.map((step, index) => {
                  return (
                    <li
                      // ? If we have steps [1, 2, 3, 4] and status.currentStep = 3:
                      // ? Step 1: step step-primary (completed)
                      // ?Step 2: step step-primary font-bold (completed + current step is next)
                      // ? Step 3: step (current/active step)
                      // ? Step 4: step (future step)

                      key={step.id}
                      className={`step ${
                        index < status.currentStep ? "step-primary" : ""
                      } ${index === status.currentStep - 1 ? "font-bold" : ""}`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">{step.icon}</span>
                        <span className="text-2xl mb-2">{step.name}</span>
                        <span className="text-xxs text-gray-600 mt-1 text-center">
                          {step.description}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      {!status && (
        <div className="alert alert-info">
          <div className="font-bold">
            <h3>Can't find your Repiar ID?</h3>
            <div className="text-xs">
              Your Repair ID can be fpound on your receipt or booking
              confirmation email. If you still can't find it, please
              <a href="/contact" className="underline text-primary">
                contact us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusTracker;
