import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "./component/Input";
import { Chip } from "./component/Chip";
import { Phone, MapPin, User } from "lucide-react";
import { SectionTitle } from "./component/SectionTitle";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function UserProfileDetails() {
  const [userData, setUserData] = useState({
    mobileNumber: "",
    emailAddress: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    streetAddress: "",
    identity: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleSave = () => {
    console.log("userData", userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "mobileNumber":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "emailAddress":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "firstName":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "lastName":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "birthDate":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "streetAddress":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "city":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "identity":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "state":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      case "postalCode":
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;

      default:
        break;
    }
  };

  return (
    <div className="relative min-h-screen px-4 sm:px-6 py-14 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Ambient cinematic glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_60%)]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto mb-12 flex items-center gap-6"
      >
        <motion.div
          whileHover={{ rotateY: 12 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-3xl font-bold shadow-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <User />
        </motion.div>

        <div>
          <h1 className="text-3xl font-semibold tracking-wide">User Profile</h1>
          <p className="text-sm text-zinc-400">
            Manage your account & personal preferences
          </p>
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-10"
      >
        {/* Account Details */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <SectionTitle title="Account Details" icon={<Phone />} />

          <motion.div
            variants={gridVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fieldVariant}>
              <Input
                label="Mobile Number"
                placeholder="Get tickets on WhatsApp / SMS"
                name="mobileNumber"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="Email Address"
                name="emailAddress"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Personal Details */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <SectionTitle title="Personal Details" icon={<User />} />

          <motion.div
            variants={gridVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fieldVariant}>
              <Input
                label="First Name *"
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="Last Name *"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="Birthday (Optional)"
                type="date"
                name="birthDate"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <label className="block text-sm mb-2 text-zinc-300">
                Identity (Optional)
              </label>
              <div className="flex gap-4 flex-wrap">
                <Chip
                  text="Woman"
                  active={userData.identity === "Woman"}
                  onClick={() =>
                    setUserData((prev) => ({ ...prev, identity: "Woman" }))
                  }
                />
                <Chip
                  text="Man"
                  active={userData.identity === "Man"}
                  onClick={() =>
                    setUserData((prev) => ({ ...prev, identity: "Man" }))
                  }
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Address */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <SectionTitle title="Address" icon={<MapPin />} />

          <motion.div
            variants={gridVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fieldVariant} className="md:col-span-2">
              <Input
                label="Street Address"
                name="streetAddress"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="City"
                name="city"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="State"
                name="state"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input
                label="Postal Code"
                name="postalCode"
                onChange={(e) => handleChange(e)}
              />
            </motion.div>

            <motion.div variants={fieldVariant}>
              <Input label="Country" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Save */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 28px rgba(220,38,38,0.65)",
            }}
            whileTap={{ scale: 0.92 }}
            className="px-10 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 font-semibold shadow-lg"
            onClick={handleSave}
          >
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
