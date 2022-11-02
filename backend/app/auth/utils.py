from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hash_password: str) -> bool:
    """Verify provided password with stored password hash"""
    return pwd_context.verify(plain_password, hash_password)


def get_password_hash(password: str) -> str:
    """Hash provided password"""
    return pwd_context.hash(password)
