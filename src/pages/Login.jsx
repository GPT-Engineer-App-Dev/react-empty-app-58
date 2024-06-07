import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <SupabaseAuthUI />
    </Container>
  );
};

export default Login;