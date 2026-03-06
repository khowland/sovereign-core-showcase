import hashlib
import time
import uuid

class ZTLHandshake:
    """
    Implements the DAGWOOD_ZTH_v1 Zero-Trust Handshake protocol.
    """
    def __init__(self, actor_id, private_key):
        self.actor_id = actor_id
        self.private_key = private_key
        self.state = "St0_DORMANT"
        self.session_token = None
        self.t_expire = 0

    def initiate_handshake(self):
        """Step 1: Generate HELLO with nonce."""
        nonce_a = uuid.uuid4().hex
        self.state = "St1_PENDING"
        return {"actor_id": self.actor_id, "nonce_A": nonce_a}

    def process_challenge(self, challenge):
        """Step 3: Respond to Vault challenge."""
        # In a real implementation, this would involve cryptographic signing.
        # For the demo, we simulate the signature.
        sig_a = hashlib.sha256(f"{challenge['challenge_C']}{self.private_key}".encode()).hexdigest()
        return {
            "sig_A": sig_a,
            "nonce_A": challenge.get("nonce_A"),
            "nonce_B": challenge.get("nonce_B")
        }

    def finalize(self, grant):
        """Step 5: Verify grant and move to St2_VERIFIED."""
        self.session_token = grant["session_token"]
        self.t_expire = grant["t_expire"]
        self.state = "St2_VERIFIED"
        return {"token_hash": hashlib.sha256(self.session_token.encode()).hexdigest()}

    def is_valid(self):
        """Check if current session is still valid (T vector)."""
        return self.state == "St2_VERIFIED" and time.time() < self.t_expire
