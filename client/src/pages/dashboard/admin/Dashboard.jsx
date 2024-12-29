import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GiConfirmed } from "react-icons/gi";
import {
  FaBook,
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaTrashAlt,
} from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch statistics
  const { data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminstats");
      return res.data;
    },
  });

  // Fetch chart data
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderstats");
      return res.data;
    },
  });

  // Fetch contact messages
  const { data: contactMessages = [] } = useQuery({
    queryKey: ["contact-messages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contacts");
      return res.data;
    },
  });

  // Fetch reservation data
  const { data: reservations = [], refetch } = useQuery({
    queryKey: ["reservations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reservation");
      return res.data;
    },
  });

  // Fetch reviews data
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/reviews");
      return res.data;
    },
  });

  // Format time to 12-hour format
  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    const hourIn12 = hour % 12 || 12; // Converts 0 to 12
    const ampm = hour >= 12 ? "PM" : "AM";
    return `${hourIn12}:${minute} ${ampm}`;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Handle reservation completion
  const handleCompleteReservation = (reservation) => {
    Swal.fire({
      title: "Mark as completed?",
      text: "This will change the status to completed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark as completed!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/reservation/${reservation._id}/status`, {
            status: "completed",
          })
          .then((response) => {
            Swal.fire(
              "Completed!",
              "The reservation has been marked as completed.",
              "success"
            );
            refetch(); // Call refetch to update the reservations list
          })
          .catch((error) => {
            console.error("Error updating reservation status:", error);
            Swal.fire(
              "Error!",
              "Failed to update the reservation status. Please try again.",
              "error"
            );
          });
      }
    });
  };

  // Handle reservation deletion
  const handleDeleteReservation = (reservation) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/reservation/${reservation._id}`)
          .then((response) => {
            // Refetch reservations to update the list
            refetch();
            Swal.fire("Deleted!", response.data.message, "success");
          })
          .catch((error) => {
            console.error("Error deleting reservation:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the reservation. Please try again.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const PieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4">Hi, {user.displayName}</h2>

      {/* All Stats */}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
        <div className="stat bg-emerald-200">
          <div className="stat-figure text-secondary text-3xl">
            <FaDollarSign />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>
        <div className="stat bg-orange-200">
          <div className="stat-figure text-secondary text-3xl">
            <FaUsers />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>
        <div className="stat bg-indigo-400">
          <div className="stat-figure text-secondary text-3xl">
            <FaBook />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>
        <div className="stat bg-purple-300">
          <div className="stat-figure text-secondary text-3xl">
            <FaShoppingCart />
          </div>
          <div className="stat-title">All Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>

      {/* Charts & Graphs */}
      <div className="mt-16 flex flex-col sm:flex-row">
        {/* Area Chart */}
        <div style={{ width: "100%", height: 300 }} className="sm:w-1/2 w-full">
          <ResponsiveContainer height={300}>
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer style={{ width: "100%", height: 400 }}>
              <PieChart width={400} height={400}>
                <Pie
                  data={PieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {PieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Contact Messages Section */}
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-semibold">Contact Messages</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* Head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactMessages.map((message, index) => (
                <tr key={message._id}>
                  <th>{index + 1}</th>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.phone}</td>
                  <td className="whitespace-normal break-words max-w-xs">
                    {message.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reservations Section */}
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-semibold">Reservations</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={reservation._id}>
                  <th>{index + 1}</th>
                  <td>{reservation.name}</td>
                  <td>{reservation.phone}</td>
                  <td>{formatDate(reservation.date)}</td>
                  <td>{formatTime(reservation.time)}</td>{" "}
                  <td>{reservation.guests}</td>
                  <td>{reservation.status}</td>
                  <td>
                    {/* Only show the Done button if the status is not "completed" */}
                    {reservation.status !== "completed" && (
                      <button
                        onClick={() => handleCompleteReservation(reservation)}
                        className="btn btn-xs bg-green text-white"
                      >
                        <GiConfirmed />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteReservation(reservation)}
                      className="btn btn-xs bg-red-500 text-white ml-2 bg-orange-400"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-green text-white">
              <tr>
                <th className="text-left">Review_Id</th>
                <th className="text-left">Review</th>
                <th className="text-left">Rating</th>
                <th className="text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <tr
                    key={review._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2">{review._id}</td>
                    <td className="py-2">{review.feedback}</td>
                    <td className="py-2">{review.rating}</td>
                    <td className="py-2">{formatDate(review.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    No reviews available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
