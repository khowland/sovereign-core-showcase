import unittest
import time
from src.handshake.ztl_handshake import ZTLHandshake

class TestZTLHandshake(unittest.TestCase):
    def setUp(self):
        self.handshake = ZTLHandshake(actor_id="ACTUATOR-001", private_key="SECURE_KEY")

    def test_initial_state(self):
        self.assertEqual(self.handshake.state, "St0_DORMANT")

    def test_initiate_handshake(self):
        hello = self.handshake.initiate_handshake()
        self.assertEqual(hello["actor_id"], "ACTUATOR-001")
        self.assertTrue("nonce_A" in hello)
        self.assertEqual(self.handshake.state, "St1_PENDING")

    def test_finalize_grant(self):
        grant = {
            "session_token": "JWT_HEADER.PAYLOAD.SIGNATURE",
            "t_expire": time.time() + 900
        }
        ack = self.handshake.finalize(grant)
        self.assertEqual(self.handshake.state, "St2_VERIFIED")
        self.assertTrue("token_hash" in ack)
        self.assertTrue(self.handshake.is_valid())

if __name__ == "__main__":
    unittest.main()
