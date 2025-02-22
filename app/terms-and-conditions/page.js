import { Box, Container, Typography, Link, Breadcrumbs } from "@mui/material";
import Layout from "../../layout/layout";
import termsBg from "@/public/assets/images/terms.jpg"; // Replace with an actual image

export default function Terms() {
  return (
    <Layout title="Terms & Conditions">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          backgroundImage: `url(${termsBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "var(--font-syne)",
        }}
      >
        <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }} />
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "var(--font-syne)" }}>
            Terms & Conditions
          </Typography>
          <Breadcrumbs sx={{ color: "white", justifyContent: "center", display: "flex", mt: 1, fontFamily: "var(--font-syne)" }}>
            <Link href="/" underline="hover" color="inherit" sx={{ fontFamily: "var(--font-syne)" }}>
              Home
            </Link>
            <Typography color="white" sx={{ fontFamily: "var(--font-syne)" }}>
              Terms & Conditions
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      {/* Terms & Conditions Content */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Introduction
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          Welcome to Stall Craft. These Terms & Conditions govern your use of our website and services. By accessing our site,
          you agree to comply with these terms. If you do not agree, please do not use our services.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Use of Our Services
        </Typography>
        <Box component="div" sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          <ul>
            <li>You must be at least 18 years old to use our services.</li>
            <li>Do not use our services for any illegal or unauthorized purpose.</li>
            <li>We reserve the right to modify, suspend, or discontinue any aspect of our services without prior notice.</li>
          </ul>
        </Box>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Intellectual Property
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          All content, including text, images, logos, and design elements, are the property of Stall Craft. Unauthorized reproduction,
          distribution, or modification is strictly prohibited.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Limitation of Liability
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          We strive to provide accurate and up-to-date information. However, we do not guarantee the completeness or accuracy of any content.
          Stall Craft is not liable for any damages arising from the use of our website or services.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Termination
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          We reserve the right to terminate or suspend your access to our website if you violate these terms. This can occur without prior
          notice if we determine that your actions harm our services or other users.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Privacy Policy
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          Your use of our services is also governed by our <Link href="/privacy-policy" underline="hover">Privacy Policy</Link>,
          which explains how we collect, use, and protect your personal data.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Changes to Terms & Conditions
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          We may update these Terms & Conditions periodically. Any changes will be reflected on this page. Continued use of our website
          after changes means you accept the updated terms.
        </Typography>

        <Typography fontSize={30} fontWeight="bold" sx={{ fontFamily: "var(--font-syne)", mb: 3 }}>
          Contact Us
        </Typography>
        <Typography fontSize={20} sx={{ fontFamily: "var(--font-syne)", color: "grey.700", mb: 5 }}>
          If you have any questions about these Terms & Conditions, please contact us via our <Link href="/contact" underline="hover">Contact Page</Link>.
        </Typography>
      </Container>
    </Layout>
  );
}
